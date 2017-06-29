var oracledb = require('oracledb');
var pool = require(__dirname + '/pool');
var async = require('async');
var dateFormat = 'DD-MON-YYYY';

function getDepartment(departmentId, callback) {
  pool.getPool().getConnection(
    function(err, connection) {
      if (err) throw err;
      oracledb.getConnection({
        user: 'hr',
        password: 'welcome',
        connectString: 'server/XE'
      },
      function(err, connection) {
        if (err) throw err;

        connection.execute(
          'select department_id, \n' +
          '   department_name, \n' +
          '   manager_id, \n' +
          '   location_id \n' +
          'from departments \n' +
          'where department_id = :department_id',
          {
            department_id: departmentId
          },
          function(err, results) {
            var department = {};

            if (err) {
              throw err;
            }

            department.id = results.rows[0][0];
            department.name = results.rows[0][1];
            department.managerId = results.rows[0][2];

            getLocationDetails(results.rows[0][3], department, connection, callback);
          }
        );
      }
    )}
  )
}

module.exports.getDepartment = getDepartment;

function getLocationDetails(locationId, department, connection, callback) {
  pool.getPool().getConnection(
    function(err, connection) {
      if (err) throw err;
      connection.execute(
        'select location_id, \n' +
        '   street_address, \n' +
        '   postal_code, \n' +
        '   country_id \n' +
        'from locations \n' +
        'where location_id = :location_id',
        {
          location_id: locationId
        },
        function(err, results) {
          if (err) throw err;

          department.location = {};
          department.location.id = results.rows[0][0];
          department.location.streetAddress = results.rows[0][1];
          department.location.postalCode = results.rows[0][2];

          getCountryDetails(results.rows[0][3], department, connection, callback);
        }
      );

    }
  )
}

function getCountryDetails(countryId, department, connection, callback) {
  connection.execute(
    'select country_id, \n' +
    '   country_name, \n' +
    '   region_id \n' +
    'from countries \n' +
    'where country_id = :country_id',
    {
      country_id: countryId
    },
    function(err, results) {
      if (err) throw err;

      department.location.country = {};
      department.location.country.id = results.rows[0][0];
      department.location.country.name = results.rows[0][1];
      department.location.country.regionId = results.rows[0][2];

      getManagerDetails(department, connection, callback);
    }
  );
}

function getManagerDetails(department, connection, callback) {
  connection.execute(
    'select employee_id, \n' +
    '   first_name || \' \' || last_name, \n' +
    '   salary, \n' +
    '   job_id \n' +
    'from employees \n' +
    'where employee_id = :manager_id',
    {
      manager_id: department.managerId
    },
    function(err, results) {
      if (err) throw err;

      delete department.managerId;

      department.manager = {};

      if (results.rows.length) {
        department.manager.id = results.rows[0][0];
        department.manager.name = results.rows[0][1];
        department.manager.salary = results.rows[0][2];
        department.manager.jobId = results.rows[0][3];
      }

      getManagerJobDetails(department, connection, callback);
    }
  );
}

function getManagerJobDetails(department, connection, callback) {
  if (department.manager.id) {
    connection.execute(
      'select job_id, \n' +
      '   job_title, \n' +
      '   min_salary, \n' +
      '   max_salary \n' +
      'from jobs \n' +
      'where job_id = :job_id',
      {
        job_id: department.manager.jobId
      },
      function(err, results) {
        if (err) throw err;

        delete department.manager.jobId;

        department.manager.job = {};
        department.manager.job.id = results.rows[0][0];
        department.manager.job.title = results.rows[0][1];
        department.manager.job.minSalary = results.rows[0][2];
        department.manager.job.maxSalary = results.rows[0][3];

        getEmployees(department, connection, callback);
      }
    );
  } else {
    getEmployees(department, connection, callback);
  }
}

function getEmployees(department, connection, callback) {
  connection.execute(
    'select employee_id, \n' +
    '   first_name || \' \' || last_name, \n' +
    '   case when hire_date < to_date(\'01-01-2005\', \'DD-MM-YYYY\') then 1 else 0 end is_senior, ' +
    '   to_char(hire_date, \'' + dateFormat + '\'), \n' +
    '   commission_pct \n' +
    'from employees \n' +
    'where department_id = :department_id',
    {
      department_id: department.id
    },
    function(err, results) {
      if (err) throw err;

      department.employees = [];

      results.rows.forEach(function(row) {
        var emp = {};

        emp.id = row[0];
        emp.name = row[1];
        emp.isSenior = row[2] === 1;
        emp.hireDate = row[3];
        emp.commissionPct = row[4];

        department.employees.push(emp);
      });

      async.eachSeries(
        department.employees,
        function(emp, cb) {
          connection.execute(
            'select job_id, \n' +
            '   department_id, \n' +
            '   to_char(start_date, \'' + dateFormat + '\'), \n' +
            '   to_char(end_date, \'' + dateFormat + '\') \n' +
            'from job_history \n' +
            'where employee_id = :employee_id',
            {
              employee_id: emp.id
            },
            function(err, results) {
              if (err) {
                cb(err);
                return;
              }

              emp.jobHistory = [];

              results.rows.forEach(function(row) {
                var job = {};

                job.id = row[0];
                job.departmentId = row[1];
                job.startDate = row[2];
                job.endDate = row[3];

                emp.jobHistory.push(job);
              });

              cb();
            }
          );
        },
        function(err) {
          if (err) throw err;

          callback(null, JSON.stringify(department));

          connection.release(function(err) {
            if (err) {
              console.error(err);
            }
          });
        }
      );
    }
  );
}
var createSnapshotTitle = function(obj) {
  var title = obj.prefix + obj.character + obj.id.scheduleId;
  $scope.snapshot = {
    title: title
  };
};

function promiseScheduleId(id) {
  return new Promise(function(resolve, reject) {
    if (id) {
      var date = new Date();
      var title = {
        character: '-',
        date: date,
        id: id,
        prefix: 'SS'
      };
      resolve(title);
    } else {
      reject(Error('Snapshot Data Error'));
    }
  });
}

promiseScheduleId(fetchScheduleId)
  .then(function(result) {
    createSnapshotTitle(result);
  })
  .catch(function(error) {
    console.log('ERROR', error);
  });

(function(win, $){
  // NOTE: Create any amount of implementations you want by:
  // Turn circle functions into objects with prototypes so that
  // I can register them. With this method, I am now able to Test
  // during the creation process for requirements that
  // are needed to create, in this case, a circle.
  function RedCircle() {/* ... */}
  RedCircle.prototype.create = function() {
    this.item = $('<div class="circle"></div>');
    return this;
  };
  function BlueCircle() {/* ... */}
  BlueCircle.prototype.create = function() {
    this.item = $('<div class="circle primary"></div>');
    return this;
  };

  var CircleFactory = function circleFactory() {
    this.types = {};
    this.create = function (type) {
      return new this.types[type]().create(); // once instantiated, create item by calling .item
    };

    // instead of creating items directly by listing out the items,
    // take out the step of finding out what the item is for
    // an external library like CircleGeneratorSingleton

    // Why? maybe we want to use the CircleFactory in
    // different scenarios or create more types of factories

    // Register acts as a gate keeper
    // Enables adding to an object dynamically
    this.register = function(type, cls) {
      // NOTE: Test for prototype.create function and if
      // the create function exists, we'll register so that we can
      // use the cls in the creation process.
      if (cls.prototype.create) {
        this.types[type] = cls;
      }
    };
  };

  var CircleGeneratorSingleton = (function() {
    // local internal reference
    var instance;

    // intiate the object
    function init() {
      // NOTE: set all properties, all functions are going
      // to live inside of here, because we dont want
      // them to execute and start until we are ready to
      // create them and return them.

      var _aCircle = [];
      var _stage = $('.advert');

      // NOTE: Create factory and list out items that it will support
      // Once the items are configured and set up, we can continue
      // to run our application.

      // TODO: Extract this Factory and the items registered to it
      // TODO: Send this factory in to give more control allowing the
      // Generator more flexibility
      var _cf = new CircleFactory();
      _cf.register('red', RedCircle);
      _cf.register('blue', BlueCircle);

      function _position(circle, left, top) {
        circle.css('left', left);
        circle.css('top', top);
        return circle;
      }

      function create(left, top, type) {
        // create circle using CircleFactory
        // access 'item' based on the callsite
        // color will determine what circle object to use which
        // will then return the appropriate this.item

        var circle = _cf.create(type).item;
        _position(circle, left, top);
        return circle;
      }

      function add(circle) {
        _stage.append(circle);
        _aCircle.push(circle);
      }

      function index() {
        return _aCircle.length;
      }

      // Return public API
      return {
        index: index,
        create: create,
        add: add,
      }
    }

    return {
      getInstance: function() {
        if(!instance) {
          instance = init();
        }
        return instance;
      }
    }
  })();

  $(win.document).ready(function() {
    $('.advert').click(function(e) {
      var circleGenerator = CircleGeneratorSingleton.getInstance();
      var circle = circleGenerator.create(
        e.pageX - 25,
        e.pageY - 25,
        'red'
      );
      // registered and set on the page
      circleGenerator.add(circle);
    });

    $(document).keypress(function(e){
      if(e.key =='a'){
        var circleGenerator = CircleGeneratorSingleton.getInstance();
        var circle = circleGenerator.create(
          Math.floor(Math.random() * 600),
          Math.floor(Math.random() * 600),
          'blue'
        );
        circleGenerator.add(circle);
      }
    });
  });
})(window, jQuery);

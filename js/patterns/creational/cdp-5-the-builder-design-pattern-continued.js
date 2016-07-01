// TODO: Add comments
(function (win, $) {
  // NOTE: Create Circle.prototype and defined what the circle can do
  function Circle() {
    this.item = $('<div class="circle"></div>');
  }
  // NOTE: List of circle capabilities
  Circle.prototype.color = function (clr) {
    this.item.css('background', clr);
  };

  Circle.prototype.position = function(left, top) {
    this.item.css('left', left);
    this.item.css('top', top);
  };

  Circle.prototype.get = function () {
    // console.log(this.item);
    return this.item;
  };

  // NOTE: Create circle type builders
  // NOTE: Everytime we use the builder a circle prototype reference is made.
  function RedCircleBuilder() {
    this.item = new Circle();
    this.init();
  }

  RedCircleBuilder.prototype.init = function() {
    // Nothing to do because red is default.
  };
  RedCircleBuilder.prototype.get = function() {
    return this.item;
  };

  function BlueCircleBuilder() {
    this.item = new Circle();
    this.init();
  }

  BlueCircleBuilder.prototype.init = function() {
    this.item.color('blue');
  };

  BlueCircleBuilder.prototype.get = function() {
    return this.item;
  };

  var CircleFactory = function() {
    this.types = {};
    // once instantiated, get a reference of this.item
    this.create = function(type) {
      return new this.types[type]().get();
    };

    // NOTE: Updated abstract factory so that it accepts builders
    // NOTE: Test for prototype.initialize & get
    this.register = function(type, cls) {
      if (cls.prototype.init && cls.prototype.get) {
        this.types[type] = cls;
      }
    };
  };

  // NOTE: set all properties, all functions are going
  // to live inside of here, because we dont want
  // them to execute and start until we are ready to
  // create them and return them.
  var CircleGeneratorSingleton = (function () {
    var instance;
    function init() {
      var _aCircle = [];
      var _stage = $('.advert');

      // NOTE: Register Builders
      // TODO: Extract this Factory and the items registered to it
      // TODO: Send this factory in to give more control allowing the
      // Generator more flexibility
      var _cf = new CircleFactory();
      _cf.register('red', RedCircleBuilder);
      _cf.register('blue', BlueCircleBuilder);

      function _position(circle, left, top) {
        circle.css('left', left);
        circle.css('top', top);
      }

      function create(left, top, type) {
        // TODO: save to refer to specific attributes of circle
        var circle = _cf.create(type).get();
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
      };
    }

    return {
      getInstance: function () {
        if(!instance) {
          instance = init();
        }
        return instance;
      },
    }
  })();

  $(win.document).ready(function () {
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

    $(document).keypress(function (e) {
      if (e.key === 'a') {
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

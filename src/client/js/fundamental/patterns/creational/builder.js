/** This is a description of the foo function. */
(function (win, $) {
  /**
  * Circle.prototype
  * Defines what the circle can do
  * Create Circle.prototype and defined what the circle can do
  * @param {string} clr
  * @param {string} left
  * @param {string} left
  */

  /**
   * Represents a Circle
   * @constructor
   */
  function Circle() {
    this.item = $('<div class="circle"></div>');
  }
  // NOTE: List of circle capabilities
  Circle.prototype.color = function (clr) {
    this.item.css('background', clr);
  };

  Circle.prototype.position = function(left, top) {
    console.log('TOP', top)
    console.log('LEFT', left)
    this.item.css('left', left);
    this.item.css('top', top);
  };

  Circle.prototype.get = function () {
    return this.item;
  };

  /**
  Blue Circle Builder
  NOTE: Create circle type builders - RedCircleBuilder & BlueCircleBuilder
  NOTE: Everytime we use the builder a circle prototype reference is made.
  NOTE: Now the 'item' inherits the prototype attributes - color, position, & get
  // */
  function RedCircleBuilder() {
    this.item = new Circle();
    this.init();
  }

  RedCircleBuilder.prototype.init = function() {
    /*
    NOTE: Nothing to do because the dom representation
    with the class="cirlce" is red by default.

    NOTE: We can change the color just by passing a
    string value
    NOTE: Demonstrated usage - this.item.color('green');

    // */
  };

  RedCircleBuilder.prototype.get = function() {
    return this.item;
  };

  /* Blue Circle Builder */
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

  /* Circle Factory */
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
  var cgSingleton = (function () {
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
        circle.position(left, top);
      }

      function create(left, top, type) {
        var circle = _cf.create(type);
        circle.position(left, top);
        return circle;
      }

      function add(circle) {
        _stage.append(circle.get());
        _aCircle.push(circle);
      }

      function index() {
        return _aCircle.length;
      }

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
      var circleGenerator = cgSingleton.getInstance();
      var circle = circleGenerator.create(
        e.pageX - 25,
        e.pageY - 25,
        'red'
      );
      circleGenerator.add(circle);
    });

    $(document).keypress(function (e) {
      if (e.key === 'a') {
        var circleGenerator = cgSingleton.getInstance();
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

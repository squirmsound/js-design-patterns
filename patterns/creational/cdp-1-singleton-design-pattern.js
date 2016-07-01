// Check out the delayed instantiation of an object
// Don't over-use it
// logic that you dont want to automatically happen
// control exactly when you want to instantiate it
// Take a look at a constant interface to gain access to the object
// See how only one instance of the object is needed.

// delayed
// constant interface
// one on instance
(function(win, $){
  var CircleGeneratorSingleton = (function() {
    // local internal reference
    var instance;

    // intiate the object
    function init() {
      // set all properties, all functions are going to live inside of here
      // because we dont want them to execute and start until we are ready to
      // create them and return them.

      var _aCircle = [],
      _stage = $('.advert');

      function _position(circle, left, top) {
        circle.css('left', left);
        circle.css('top', top);
        return circle;
      }

      function create(left, top) {
        var circle = $('<div class="circle"></div');
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
      var circle = circleGenerator.create(e.pageX - 25, e.pageY - 25);
      // registered and set on the page
      circleGenerator.add(circle);
    });

    $(document).keypress(function(e){
      if(e.key =='a'){
        var circleGenerator = CircleGeneratorSingleton.getInstance();
        var circle = circleGenerator.create(
          Math.floor(Math.random() * 600),
          Math.floor(Math.random() * 600)
        );
        circleGenerator.add(circle);
      }
    })
  });
})(window, jQuery);

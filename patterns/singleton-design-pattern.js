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
  $(win.document).ready(function(){
    $('.advert').click(function(e){
      var circle = $('<div class="circle"></div');
        circle.css('left', e.pageX - 25);
        circle.css('top', e.pageX - 25);
      $('.advert').append(circle);
    });
  });
})(window, jQuery);
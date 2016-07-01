var chatModule = (function () {

  // private
  var leadself = 'Me: ',
	leadcomputer = "PC: ",
	aSaid = ["This :s a Cyber Chat"],
	msgYes = "Yes, that's a great idea.",
	msgNo = "No, that must be a mistake.",
	aSassyStuff = [
    "Like mold on books, grow myths on history.",
    "She moved like a poem and smiled like a sphinx.",
		"As long as we don’t die, this is gonna be one hell of a story.",
		"She laughed, and the desert sang.",
		"You’ve got about as much charm as a dead slug."];

  // return API for public access
  function echo(msg) {
    aSaid.push('<div>' + msg + '</div>');

    var aSaidLength = aSaid.length,
      start= Math.max( aSaidLength - 6, 0),
      out = '';

    for (var i = start; i < aSaidLength; i++) {
      out += aSaid[i];
    }
    $('.advert').html(out);
    $('#talk span').text(msg);
  }

  // return API for public access
  return {
    talk: function(msg) {
      echo(leadself + msg);
    },
    replyYesNo: function (msg) {
      var msg = Math.random() > 0.5 ? msgYes : msgNo;
      echo(leadcomputer + msg);
    },
    saySassyStuff: function () {
      var msg = aSassyStuff[ Math.floor(Math.random() * aSassyStuff.length)];
      echo(leadcomputer + msg);
    },
  };
})();

$(document).ready(function() {
  chatModule.talk('init');
  chatModule.replyYesNo();
  chatModule.saySassyStuff();
});

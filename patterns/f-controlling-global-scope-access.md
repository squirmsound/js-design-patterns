# Controlling Global Access

* Use the Module concept to make everything private
* Conditionally add elements to the global scope
* Send things from the global scope into our Mega Module

# How

* Pull the anonymous function and place it inside a self assigned function

```
(function (win, doc, $) {

  var chatModule = (function() {

  })();

    $(doc).ready(function() {
      chatModule.talk('init');
      chatModule.replyYesNo();
      chatModule.saySassyStuff();
    });

    // Create a public API in the window
    // Control the access to the global scope based on a condition

    if(!win.chatModule) {
      win.chatModule = chatModule;
    }

})(window, document, jQuery);
```

# Notes

* Need to send the (document, jQuery) directly into the object/module because the module is dependent/using on global scope.

*  Control the access to the global scope based on a condition that leverages the process of importing (window, ..) into the module.

* Checking the window object allows us to see if chatModule exists before either creating it or overriding it.

* Using this conditional pattern allows us to control the access between our module and the global scope.

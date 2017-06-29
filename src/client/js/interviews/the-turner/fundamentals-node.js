// QUESTION 1:
// -------------------------------------------------------------------------------------------------
// // What is typically the first argument passed to a Node.js callback handler?

      // // NOTE - An acceptable answer :

      // // Node.js core modules, follow a pattern whereby the first argument to any callback handler is an optional error object.
      // // If there is no error, the argument will be null or undefined.

      // // Example

            function callback(err, results) {
                // usually we'll check for the error before handling results
                if(err) {
                    // handle error somehow and return
                }
                // no error, perform standard callback handling
            }

// QUESTION 2: Are you familiar with the Cluster Module?
// -------------------------------------------------------------------------------------------------
// // Follow QUESTION: How does Node.js handle child threads?

      // // NOTE - Looking for answer like :

      // // Node.js is a single thread process.
      // // It does not expose child threads and thread management methods to the developer.
      // // Node.js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop.

// QUESTION 3: What is the preferred method of resolving unhandled exceptions in Node.js?
// -------------------------------------------------------------------------------------------------
      // // NOTE - An acceptable answer :

      // // Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.

      // // Example
            process.on('uncaughtException', function(err) {
              console.log('Caught exception: ' + err);
            });

      // // NOTE - Another acceptable answer :
      // // The preferred way is to add another layer between your application and the Node.js process which is called the domain.
      // // Domains provide a way to handle multiple different I/O operations as a single group.
      // // By having your application, or part of it, running in a separate domain, you can safely handle exceptions at the domain level, before they reach the Process level.

// Advanced QUESTION 4: Are you familiar with the Cluster Module?
// -------------------------------------------------------------------------------------------------
      // // If so, follow up QUESTION: What is it?

            // // NOTE - An acceptable answer :

            // The Cluster module is one of the core Node.js modules and it allows running multiple Node.js worker processes that will share the same port.

                // // Advanced follow up QUESTION: How does Node.js support multi-processor platforms, and does it fully utilize all processor resources??

// Note: The old-school but now deprecated and frowned-upon arguments.callee reference inside a
// function also points to the function object of the currently executing function. This reference is typically the only way to access an anonymous function's object from inside itself. The best approach, however, is to avoid the use of anonymous functions altogether, at least for those which require a self-reference, and instead use a named function (expression). arguments.callee is deprecated and should not be used.
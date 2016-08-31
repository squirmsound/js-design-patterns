"use strict";
function delegate(wrapper, selector, eventName) {
    return Rx.Observable.fromEvent(document.querySelector(wrapper), eventName, function (e) { return ({ event: e, delegate: e.target.closest(selector) }); }).filter(function (x) { return x.delegate !== null; });
}
delegate('.wrapper', 'button', 'click')
    .subscribe(function (e) { return console.dir(e); });
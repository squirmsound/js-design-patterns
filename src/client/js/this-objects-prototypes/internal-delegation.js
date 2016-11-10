/**
 * Build API with less magic
 * but still take advantage of the [[Prototype]] linkage
 */
var first = {
    cool: function (){
        console.log('cool in second');
    }
};
var second = Object.create(first);
second.callCool = function(){
    this.cool(); // internal delegation!
};
second.callCool();

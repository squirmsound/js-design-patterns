/**
 * Created by squirm on 4/1/16.
 */
var object = {
    id: 'time',
};
function foo(el) {
    console.log(el, this.id);
}
// use `object` as `this` for `foo(..)` calls
['1', '2', '3',].forEach(foo, object);
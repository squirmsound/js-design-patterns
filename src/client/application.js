import './application.scss';

import * as services from './services';
// import * as arrays from './js/patterns/fundamentals/arrays';
import * as iQ from './js/studies';
import { prices } from './js/studies/data/prices';
import { integers } from './js/studies/data/integers';


// Playground
// ----------------------------------------
services.server.emitAction$('login', { username: 'foo', password: 'bar' })
  .subscribe(user => {
      console.log("We're logged in: " + user);
    }, error => {
      console.error(error);
    });

// Send the status of the server
services.server.status$.subscribe(
  // status => console.log(status)
);


// Auth
// ----------------------------------------


// Components
// ----------------------------------------


// Bootstrap
// ----------------------------------------
services.socket.connect();

// Array Studies
// ----------------------------------------
// arrays.arrForLoop.forLoop();
// arrays.arrForEach.forEach();
// arrays.arrProjectArr.projectArr();
// arrays.arrProjectMap.projectMap();
// arrays.arrForEachFilter.fitlerArray();
// arrays.arrFilterMapChain.filterMapChain();
// arrays.arrQueryingTrees.queryingTrees();
// arrays.arrMapConcatAllQuery.mapConcatAllQuery();
// arrays.arrMapConcatAllQueryDeep.mapConcatAllQueryDeep();
// arrays.arrReducing.reducingArrays();
// arrays.arrReducingWithPrototype.reducingArraysWithPrototype();

// Interview Studies
// ----------------------------------------
const priceList = prices;
const integerList = integers;
console.log('INTEGERLIST', integerList)

iQ.iQGetMaxProfit.getMaxProfit(priceList);
iQ.iQGetProductsOfOtherNums.getProductsOfOtherNums(integerList);

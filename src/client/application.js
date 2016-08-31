// @flow
import './application.scss';

import * as services from './services';
import * as arrays from './js/patterns/fundamentals/arrays';
import * as iQ from './js/studies';
import { prices } from './js/studies/data/prices';
import { integers } from './js/studies/data/integers';


// Playground
// ----------------------------------------
services.server.emitAction$('login', { username: 'foo', password: 'bar' })
  .subscribe(user => {
      // console.log("We're logged in: " + user);
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

// Mock Data
// ----------------------------------------
const priceList = prices;


// Array Studies
// ----------------------------------------
arrays.arrForLoop();
arrays.arrForEach();
arrays.arrProjectArr();
arrays.arrProjectMap();
arrays.arrForEachFilter();
arrays.arrFilterMapChain();
arrays.arrQueryingTrees();
// arrays.arrMapConcatAllQuery.mapConcatAllQuery();
// arrays.arrMapConcatAllQueryDeep.mapConcatAllQueryDeep();
// arrays.arrReducing.reducingArrays();
// arrays.arrReducing.reducingArrays();
// arrays.arrReducingWithPrototype.reducingArraysWithPrototype();
arrays.arrReduceIntro();
arrays.arrReduceArrToObject();
// arrays.arrReduceDoubler();

// Interview Studies
// ----------------------------------------
// const integerList = integers;
// console.log('INTEGERLIST', integerList)

// iQ.iQGetProductsOfOtherNums.getProductsOfOtherNums(integerList);
// iQ.iQFibonacci();
iQ.iQGetMaxProfit(priceList);


// BST
// ----------------------------------------
// to create a tree you need a node. a node in a tree looks like



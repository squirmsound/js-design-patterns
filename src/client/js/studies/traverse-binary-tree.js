/** There are 3 different kinds of depth first traversals
*     pre-order: visit each node before visiting any
*                of its children
*
*     in-order: visit each node after visiting its left
*               child, but before visiting its right child
*
*     post-order: visit each node after visiting both
*                 of its children
*
* This shows how each of these traversals can be
* implemented recursively! :D
*/

var traversalNodes = [];

var visit = function(node, order) {
  var nodeData = {
    node: node,
    order: order
  };
  traversalNodes.push(nodeData);
};

// All three traversals at once!  Oh my!
var depthFirstTraverse = function(node) {
  visit(node, "PRE_ORDER");

  if (node.left) {
    depthFirstTraverse(node.left);
  }

  visit(node, "IN_ORDER");

  if (node.right) {
    depthFirstTraverse(node.right);
  }

  visit(node, "POST_ORDER");
};

/////////////////////// TREE CODE //////////////////////////
var treeHeight = 3;
var maxCountdown = 15;

var Node = function(parent) {
  var node = {
    left: null,
    right: null,
    isLeaf: true,
    parent: parent,
    depth: parent ? parent.depth + 1 : 0,
    x: 0,
    y: 0,
    countdown: 0,
    visited: false,
    changing: false,
    label: null
  };

  // add children
  if (node.depth < treeHeight) {
    node.left = Node(node);
    node.right = Node(node);
    node.isLeaf = false;
  }

  return node;
};

var drawNode = function(node, x, y) {
  node.x = x;
  node.y = y;

  // recursively draw children
  var xDist = 100/pow(2, node.depth);
  var yDist = 50;
  if (node.left) {
    var leftX = x - xDist;
    var leftY = y + yDist;
    stroke(255, 255, 255);
    line(x, y, leftX, leftY);
    drawNode(node.left, leftX, leftY);
  }
  if (node.right) {
    var rightX = x + xDist;
    var rightY = y + yDist;
    stroke(255, 255, 255);
    line(x, y, rightX, rightY);
    drawNode(node.right, rightX, rightY);
  }

  // draw node highlight, if it is cuurently being visited
  noStroke();
  if (node.countdown > 0 && node.changing) {
    fill(255, 255, 255, node.countdown * 20);
    ellipse(x, y, 36-node.countdown, 36-node.countdown);
  }
  node.countdown--;

  // draw node
  var nodeColor = color(0, 205, 232);
  var visitedColor = color(255, 64, 128);
  fill(nodeColor);
  if (node.visited) {
    if (node.countdown > 0 && node.changing) {
      var a = 1 - node.countdown / maxCountdown;
      fill(lerpColor(nodeColor, visitedColor, a));
    } else {
      node.changing = false;
      fill(visitedColor);
    }
  }
  ellipse(x, y, 20, 20);

  // draw node label
  fill(255, 255, 255);
  var dx = -4;
  var dy = 4;
  if (node.label > 9) {
    // number is 2 digits
    dx = -7;
  }
  text(node.label, x + dx, y + dy);
};

var resetNode = function(node) {
  if (!node) {
    return;
  }
  node.countdown = 0;
  node.visited = false;
  node.changing = false;
  node.label = null;
  resetNode(node.left);
  resetNode(node.right);
};

//////////////////// ANIMATION VARIABLES ///////////////////
var animating = false;
var animatingEdge = false;
var order = null;
var currIndex = 0;
var labelCounter = 1;

// edge animation variables
var edgeTimer = 0;
var edgeDuration = 10;
var fromNode = null;
var toNode = null;
var edgeHilight = {x: 0, y: 0};

// set up tree and run traversals
var root = Node(null);
depthFirstTraverse(root);

//////////////////////// BUTTON CODE ///////////////////////
var drawButtons = function() {
  strokeWeight(1);
  stroke(158, 158, 158);

  var unselectedColor = color(201, 201, 201, 90);
  var selectedColor = color(255, 3, 108, 112);

  if (order === "PRE_ORDER") {
    fill(selectedColor);
  } else {
    fill(unselectedColor);
  }
  rect(20, 20, 100, 20, 8);

  if (order === "IN_ORDER") {
    fill(selectedColor);
  } else {
    fill(unselectedColor);
  }
  rect(150, 20, 100, 20, 8);

  if (order === "POST_ORDER") {
    fill(selectedColor);
  } else {
    fill(unselectedColor);
  }
  rect(280, 20, 100, 20, 8);

  fill(184, 230, 255);
  text("PRE-ORDER", 35, 35);
  text("IN-ORDER", 169, 35);
  text("POST-ORDER", 291, 35);
};

// this gets called when one of the buttons is clicked
var startAnimation = function(tourOrder) {
  if (!animating) {
    // reset tree
    resetNode(traversalNodes[0].node);

    // reset animation variables
    fromNode = root;
    toNode = root;
    order = tourOrder;
    labelCounter = 1;

    // turn on animation
    animating = true;
  }
};

var mouseClicked = function() {
  if (mouseX > 20 && mouseX < 120 &&
    mouseY > 20 && mouseY < 40) {
      startAnimation("PRE_ORDER");
    }
    if (mouseX > 150 && mouseX < 250 &&
      mouseY > 20 && mouseY < 40) {
        startAnimation("IN_ORDER");
      }
      if (mouseX > 280 && mouseX < 380 &&
        mouseY > 20 && mouseY < 40) {
          startAnimation("POST_ORDER");
        }
      };

      ////////////////////// ANIMATION CODE ///////////////////////
      var draw = function() {
        background(61, 61, 61);
        strokeWeight(2);

        if (animating) {
          if (animatingEdge) {
            if (edgeTimer < edgeDuration) {
              var xStep = (toNode.x - fromNode.x);
              var yStep = (toNode.y - fromNode.y);
              xStep /= edgeDuration;
              yStep /= edgeDuration;
              edgeHilight.x += xStep;
              edgeHilight.y += yStep;
              ellipse(edgeHilight.x, edgeHilight.y, 7, 7);
              edgeTimer++;
            } else {
              edgeTimer = 0;
              animatingEdge = false;
            }
          } else {
            // animating node
            if (traversalNodes[currIndex]) {
              var nodeData = traversalNodes[currIndex];
              var node = nodeData.node;

              // highlight the node
              if (nodeData.order === order || node.isLeaf){
                node.visited = true;
                node.changing = true;
                node.label = labelCounter++;
              }
              noStroke();
              node.countdown = maxCountdown;
              if (node.isLeaf) {
                currIndex += 3;
              } else {
                currIndex++;
              }
              if (traversalNodes[currIndex]) {
                // prepare next edge animation
                fromNode = node;
                toNode = traversalNodes[currIndex].node;
                animatingEdge = true;
                edgeHilight.x = fromNode.x;
                edgeHilight.y = fromNode.y;
              }
            } else {
              animating = false;
              currIndex = 0;
            }
          }
        }

        drawNode(traversalNodes[0].node, 200, 115);
        drawButtons();
      };

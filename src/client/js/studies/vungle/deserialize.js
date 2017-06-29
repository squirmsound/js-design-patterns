/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  var nodes = data.split('#');
  return LDR(0).node;

  function LDR(i){
    if(nodes[i] !== undefined && nodes[i] !== "" && nodes[i] !== 'N'){
      var root = new TreeNode(parseInt(nodes[i]));
      i++;
      var res = LDR(i);
      i = res.i;
      root.left = res.node;
      res = LDR(i);
      i = res.i;
      root.right = res.node;
      return {node : root, i : i};
    }else{
      return {node : null, i : ++i};
    }
  }
};
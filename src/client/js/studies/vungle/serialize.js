/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* Encodes a tree to a single string.
*
* @param {TreeNode} root
* @return {string}
*/
var serialize = function(root) {
  var res = "";
  LDR(root);
  if(res[0] === '#'){
    res = res.substring(1);
  }
  return res;

  function LDR(node){
    if(node !== null && node.val !== undefined){
      res += "#" + node.val;
      if(node.left !== null){
        LDR(node.left);
      }else{
        res += "#N";
      }
      if(node.right !== null){
        LDR(node.right);
      }else{
        res += "#N";
      }
    }
  }
};

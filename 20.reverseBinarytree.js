// write a program to reverse of binanry tree

// Given binary tree, reverse the tree (carefully observe the reversed tree)
/*
          A
      B       C
    D   E       F

          A
      B       C
    E   D   F    
     
  tree = {
    value: '',
    left: tree | '',
    right: tree | ''
  }
*/

function reverseTree(root) {
  if (root.left === null && root.right === null) {
    return root;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  if (typeOf(root.left) === 'object') {
    return reverseTree(root.left);
  }
  if (typeOf(root.right) === 'object') {
    return reverseTree(root.right);
  }
}
function printTree(root) {
  // to write a program to print it.
}
/*
        A
    B         C
  D   E         F
 --------------------------  
        A
    c         B
      f     D   E
 ------------------------
        A
    c         B
  f         E   D
*/

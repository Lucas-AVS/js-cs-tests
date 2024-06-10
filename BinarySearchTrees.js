function Node(data, left = null, right = null) {
  return {
    data,
    left,
    right,
  };
}

function Tree(arr) {
  function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  }

  let newArray = removeDuplicates(arr.sort((a, b) => a - b));

  function buildTree(array, left = 0, right = array.length - 1) {
    if (left > right) {
      return null;
    }

    let mid = Math.floor((left + right) / 2);
    let root = Node(array[mid]);

    root.left = buildTree(array, left, mid - 1);
    root.right = buildTree(array, mid + 1, right);

    return root;
  }
  return buildTree(newArray);
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let customArray = [10, 5, 3, 5, 2, 1, 7, 9, 10];
let customTree = Tree(customArray);
// console.log(customTree);

// console.log(prettyPrint(customTree));

// inserir
function treeInsert(newItem, treeObj) {
  if (newItem == treeObj.data) {
    return;
  } else if (newItem > treeObj.data) {
    if (treeObj.right === null) {
      treeObj.right = Node(newItem);
    } else {
      treeInsert(newItem, treeObj.right);
    }
  } else if (newItem < treeObj.data) {
    if (treeObj.left === null) {
      treeObj.left = Node(newItem);
    } else {
      treeInsert(newItem, treeObj.left);
    }
  }
}

treeInsert(11, customTree);
// console.log(customTree);
// console.log(prettyPrint(customTree));

function findClosestValue(treeObj, first = false) {
  if (treeObj.left == null && first) {
    return treeObj.data;
  } else if (treeObj.right == null) {
    return findClosestValue(treeObj.left, true);
  } else if (treeObj.right && !first) {
    return findClosestValue(treeObj.right, true);
  } else if (treeObj.left) {
    return findClosestValue(treeObj.left, true);
  }
}

function treeRemove(removedItem, treeObj, parent = null) {
  if (treeObj === null || treeObj.data === null) {
    return;
  }

  // null data/sides
  if (removedItem == treeObj.data) {
    if (treeObj.left === null && treeObj.right === null) {
      treeObj.data = null;
      return;

      //root
    } else {
      parent
        ? //has parent?
          (newValue = findClosestValue(treeObj, true))
        : (newValue = findClosestValue(treeObj));

      //swap the closest value for the removed one and then remove that value from the tree
      treeRemove(newValue, treeObj);
      treeObj.data = newValue;
      return;
    }
    //remove leaf nodes
  } else if (
    treeObj.left != null &&
    treeObj.left.data == removedItem &&
    treeObj.left.left == null
  ) {
    // no left/right obj = null
    if (treeObj.left.right == null) {
      treeObj.left = null;
      return;
      // if there is a left leaf it became the new node data value
    } else {
      treeObj.left = treeObj.left.right;
      return;
    }
  } else if (
    treeObj.right != null &&
    treeObj.right.data == removedItem &&
    treeObj.right.left == null
  ) {
    // no left/right obj = null
    if (treeObj.right.left == null) {
      treeObj.right = null;
      return;
      // if there is a right leaf it became the new node data value
    } else {
      treeObj.right = treeObj.right.left;
      return;
    }
    //recursive attempt to find the removed item
  } else if (removedItem > treeObj.data) {
    treeRemove(removedItem, treeObj.right, treeObj.data);
  } else if (removedItem < treeObj.data) {
    treeRemove(removedItem, treeObj.left, treeObj.data);
  }
}

let customArray2 = Tree([0, 11, 5, 3, 5, 2, 1, 7, 9, 10, 50, 30]);

//Write a find(value) function that returns the node with the given value.
function find(value, treeObj) {
  if (!treeObj) {
    console.log("value not found");
    return null;
  }

  if (value === treeObj.data) {
    return treeObj;
  } else if (value > treeObj.data) {
    return find(value, treeObj.right);
  } else {
    return find(value, treeObj.left);
  }
}

function levelOrder(treeObj, callback = null, arr = []) {
  if (!treeObj) {
    return arr;
  }

  if (callback) {
    callback(treeObj.data);
  } else {
    arr.push(treeObj.data);
  }

  let queue = [treeObj.left, treeObj.right];

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (currentNode) {
      if (callback) {
        callback(currentNode.data);
      } else {
        arr.push(currentNode.data);
      }
      queue.push(currentNode.left, currentNode.right);
    }
  }

  return arr;
}

function inOrder(root, arr = []) {
  if (root === null) return arr;

  if (root.left) preOrder(root.left, arr);

  arr.push(root.data);

  if (root.right) preOrder(root.right, arr);

  return arr;
}

function preOrder(root, arr = []) {
  if (root === null) return arr;

  arr.push(root.data);

  if (root.left) preOrder(root.left, arr);

  if (root.right) preOrder(root.right, arr);

  return arr;
}

function postOrder(root, arr = []) {
  if (root === null) return arr;

  if (root.left) postOrder(root.left, arr);

  if (root.right) postOrder(root.right, arr);

  arr.push(root.data);

  return arr;
}

function height(root) {
  if (root === null) return -1;

  let leftHeight = height(root.left);

  let rightHeight = height(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

console.log(prettyPrint(customArray2));
console.log(levelOrder(customArray2, null));
console.log(height(customArray2));

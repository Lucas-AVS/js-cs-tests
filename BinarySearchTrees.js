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

function findClosestValue(treeObjSearch, first = false) {
  if (treeObjSearch.left == null && first) {
    return treeObjSearch.data;
  } else if (treeObjSearch.right == null) {
    return findClosestValue(treeObjSearch.left, true);
  } else if (treeObjSearch.right && !first) {
    return findClosestValue(treeObjSearch.right, true);
  } else if (treeObjSearch.left) {
    return findClosestValue(treeObjSearch.left, true);
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
console.log(prettyPrint(customArray2));
treeRemove(0, customArray2);
console.log(prettyPrint(customArray2));
treeRemove(5, customArray2);
console.log(prettyPrint(customArray2));
treeRemove(11, customArray2);
console.log(prettyPrint(customArray2));

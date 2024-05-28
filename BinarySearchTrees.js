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
console.log(customTree);

console.log(prettyPrint(customTree));

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
console.log(customTree);
console.log(prettyPrint(customTree));

//remover
function treeRemove(removedItem, treeObj) {
  if (removedItem == treeObj.data) {
    if (treeObj.left === null || treeObj.right === null) {
      treeObj = null;
      return;
    }
    //tree remove logic.........
    return;
  } else if (newItem > treeObj.data) {
    treeRemove(newItem, treeObj.right);
  } else if (newItem < treeObj.data) {
    treeRemove(newItem, treeObj.left);
  }
}

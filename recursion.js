function printChildren(t) {
  for (var key in t) {
    // skip loop if the property is from prototype
    if (!t.hasOwnProperty(key)) continue;

    var obj = validation_messages[key];
    for (var prop in obj) {
      // skip loop if the property is from prototype
      if (!obj.hasOwnProperty(prop)) continue;

      // your code
      alert(prop + " = " + obj[prop]);
    }
  }
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        {
          name: "Kyle",
          children: [],
        },
        {
          name: "Sophia",
          children: [],
        },
      ],
    },
  ],
};

function printChildren(obj) {
  if (!obj.children || obj.children.length === 0) {
    console.log(`${obj.name} doesn't have children`);
  } else {
    console.log(`${obj.name} has ${obj.children.length} children`);
    obj.children.forEach((child) => printChildren(child));
  }
}

printChildren(tree);

function countDown(n) {
  if (n <= 0) {
    console.log("Hooray");
    return;
  } else {
    console.log(n);
    countDown(n - 1);
  }
}

countDown(10);

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

function fibonacci(n) {
  let arr = [0, 1];
  let nextNum = 1;
  while (n > 2) {
    n = n - 1;
    arr.push(nextNum);
    nextNum = arr[arr.length - 1] + arr[arr.length - 2];
  }

  return arr;
}

function fibsRec(n, arr = [0, 1]) {
  if (n <= 2) {
    return arr;
  }
  let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(nextNum);
  return fibsRec(n - 1, arr);
}

console.log(fibsRec(1));
console.log(fibonacci(6));

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  leftArr = leftArr || [];
  rightArr = rightArr || [];

  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort([2, 3, 1, -7, 8, 4]));

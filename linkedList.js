// head: Node { data: data, next: Node { data: data, next: null }

function LinkedList() {
  let head = null;
  let size = 0;
  function append(data) {
    if (!head) {
      head = Node(data);
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = Node(data);
    }
    size++;
  }
  function prepend(data) {
    if (!head) {
      head = Node(data);
    } else {
      let previous = head;
      head = Node(data, previous);
    }
    size++;
  }
  function getTail() {
    if (!head) {
      return head;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      return current.data;
    }
  }
  function at(index) {
    if (index >= size || index < 0) {
      return "index doesn't exist";
    }
    let current = head;
    while (index > 0) {
      index--;
      current = current.next;
    }
    return current.data;
  }

  function pop() {
    if (!head) {
      console.log("there is no data to pop");
      return;
    }
    if (!head.next) {
      head = null;
    } else {
      let current = head;
      let previous = null;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
    size--;
  }
  function contains(value) {
    if (!head) {
      console.log("There are no values in the list");
      return false;
    } else {
      let current = head;
      while (current) {
        if (current.data === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }

  function find(value) {
    if (!head) {
      console.log("There are no values in the list");
      return;
    } else {
      let current = head;
      let index = 0;
      while (current) {
        if (current.data === value) {
          return `value is at index ${index}`;
        }
        current = current.next;
        index++;
      }
      return `value not found`;
    }
  }

  //( value ) -> ( value ) -> ( value ) -> null
  function toString() {
    if (!head) {
      return "list is empty";
    } else {
      let string = "";
      let current = head;
      while (current) {
        string += `(${current.data}) -> `;
        current = current.next;
      }
      string += "null";
      return string;
    }
  }

  return {
    append,
    prepend,
    getHead: () => (head ? head.data : null),
    getSize: () => size,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

function Node(data = null, next = null) {
  return {
    data,
    next,
  };
}

let myList = LinkedList();

myList.append(100);
myList.append(200);
myList.prepend(300);

console.log(myList.getHead());
console.log(myList.getTail());
console.log(myList.pop());
console.log(myList.getTail());
console.log(myList.getSize());
console.log(myList.at(2));
console.log(myList.contains(100));
console.log(myList.find(200));
console.log(myList.toString());

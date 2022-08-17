// Linked list node
function node(value) {
  this.data = value;
  this.next = null;
}

// creating head and adding trailling nodes
let nod = new node(1, null);
nod.next = new node(2, null);
nod.next.next = new node(3, null);
nod.next.next.next = new node(4, null);
nod.next.next.next.next = new node(5, null);
nod.next.next.next.next.next = new node(6, null);

function createLinkedList(nodes) {
  let linked1;
  for (let i of nodes) {
    if (!linked1) {
      linked1 = new node(i);
    } else {
      let temp = linked1;
      while (temp && temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new node(i);
    }
  }
  return linked1;
}

function printLinkedList(linked1) {
  let counter = 0;
  while (linked1 && linked1.next !== null) {
    console.log('linked list index - ', counter++, 'value - ', linked1.data);
    linked1 = linked1.next;
  }
  console.log('linked list index - ', counter, 'value - ', linked1.data);
}

function deleteNode(linked1, index) {}
function addNode(linked1, value, index) {}
function updateNode(linked1, newValue, oldValue) {}

// create linked list
const list = createLinkedList([1, 3, 4, 5, 6]);
// print linked list
printLinkedList(list);

// print linked list
console.log('in given order');
printLinkedList(nod);

// reverse linked list
function reverse(nod) {
  let current = Object.assign({}, nod);
  let previous = null;
  while (current.next !== null) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  current.next = previous;

  console.log('in reverse order');
  printLinkedList(current);
}

// calling reverse method
reverse(nod);

function getDecimalValue(head) {
  let bin = '';
  while (head !== null) {
    bin = bin + head.data.toString();
    head = head.next;
  }
  let val;
  for (let i of bin) {
    if (val === undefined) {
      val = Number.parseInt(i);
    } else {
      val = val * 2 + Number.parseInt(i);
    }
  }
  return val;
}

getDecimalValue(createLinkedList([1, 0, 1, 0, 1, 1]));

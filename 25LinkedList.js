// Linked list node
function node(value, obj) {
  this.data = value;
  this.next = obj;
}

// creating head and adding trailling nodes
let nod = new node(1, null);
nod.next = new node(2, null);
nod.next.next = new node(3, null);
nod.next.next.next = new node(4, null);
nod.next.next.next.next = new node(5, null);
nod.next.next.next.next.next = new node(6, null);

function node(value) {
  this.data = value;
  this.next = null;
}

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

const list = createLinkedList([1, 3, 4, 5, 6]);
printLinkedList(list);
console.log(list);

function printLinkedList(linked1) {
  let counter = 0;
  while (linked1 && linked1.next !== null) {
    console.log('linked list index - ', counter++, 'value - ', linked1.data);
    linked1 = linked1.next;
  }
  console.log('linked list index - ', counter, 'value - ', linked1.data);
}

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

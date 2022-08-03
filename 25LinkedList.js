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

// print linked list
console.log(nod, "in given order");

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

  console.log(current, "in reverse order");
}

// calling reverse method
reverse(nod);

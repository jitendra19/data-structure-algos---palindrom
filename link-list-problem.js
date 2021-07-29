/*
Given a linked list denoting a number (each key will have numbers from 0-9), implement addOne function which takes a list and add 1 to it.
Example - For number 7899, Linked List would be [7, 8, 9, 9]

If you add 1 to 7899, you get 7900 which is [7, 9, 0, 0]
*/

export default function addOneinLinkList() {
  let a = { digit: 9, next: null };
  let b = { digit: 9, next: null };
  let c = { digit: 9, next: null };
  let d = { digit: 9, next: null };

  a.next = b;
  b.next = c;
  c.next = d;

  let list = a;

  function printList(list) {
    let arr = [],
      node = list;
    while (node != null) {
      arr.push(node.digit);
      node = node.next;
    }
    console.log(arr);
  }

  printList(list); // [7, 8, 9, 9] => [{},{},{},{digit:0, next: null}]

  function addOne(list) {
    add1ByRecursion(list);
  }
  function add1ByRecursion(list, updatePreviousNode) {
    function ifLatestValueis10(list) {
      list.digit++;
      if (list.digit === 10) {
        list.digit = 0;
        return true;
      } else return false;
    }
    if ((list && list.next && add1ByRecursion(list.next)) || !list.next) {
      return ifLatestValueis10(list);
    }
  }
  addOne(list);
  printList(list); // [7, 9, 0, 0]
}

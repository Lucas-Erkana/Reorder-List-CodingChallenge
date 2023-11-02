var reorderList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow.next;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  slow.next = null;

  let p1 = head;
  let p2 = prev;
  while (p1 && p2) {
    const next1 = p1.next;
    const next2 = p2.next;
    p1.next = p2;
    p2.next = next1;
    p1 = next1;
    p2 = next2;
  }

  printLinkedList(head);
};

// Helper function to print the values of the linked list
function printLinkedList(head) {
  let node = head;
  const values = [];
  while (node) {
    values.push(node.val);
    node = node.next;
  }
  console.log(values);
}

// Example 1
const head1 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
reorderList(head1); // [1, 4, 2, 3]

// Example 2
const head2 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
reorderList(head2); // [1, 5, 2, 4, 3]


module.exports = reorderList;
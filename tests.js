const reorderList = require('./solution');
const assert = require('assert');

describe('Tests', function () {
  it('should reorder the list [1, 2, 3, 4] to [1, 4, 2, 3]', function () {
    const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
    reorderList(head);
    assert.deepStrictEqual(getLinkedListValues(head), [1, 4, 2, 3]);
  });

  it('should reorder the list [1, 2, 3, 4, 5] to [1, 5, 2, 4, 3]', function () {
    const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
    reorderList(head);
    assert.deepStrictEqual(getLinkedListValues(head), [1, 5, 2, 4, 3]);
  });

  it('should reorder the list [1] to [1]', function () {
    const head = { val: 1, next: null };
    reorderList(head);
    assert.deepStrictEqual(getLinkedListValues(head), [1]);
  });

  it('should reorder the list [1, 2] to [1, 2]', function () {
    const head = { val: 1, next: { val: 2, next: null } };
    reorderList(head);
    assert.deepStrictEqual(getLinkedListValues(head), [1, 2]);
  });

  it('should reorder the list [1, 2, 3, 4, 5, 6] to [1, 6, 2, 5, 3, 4]', function () {
    const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } };
    reorderList(head);
    assert.deepStrictEqual(getLinkedListValues(head), [1, 6, 2, 5, 3, 4]);
  });

  // Helper function to get the values of the linked list
  function getLinkedListValues(head) {
    let node = head;
    const values = [];
    while (node) {
      values.push(node.val);
      node = node.next;
    }
    return values;
  }
});

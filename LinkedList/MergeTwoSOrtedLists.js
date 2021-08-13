function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (!l1.val && !l2.val) {
    return null;
  }
  //Will create a new List Node with any value as a begining and will pass the Listnode.next as answer
  //will create a new header which will act as a mover on the linked list
  let mergedlist = new ListNode(0);
  let dummyheader = mergedlist;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      dummyheader.next = l1;
      l1 = l1.next;
    } else {
      dummyheader.next = l2;
      l2 = l2.next;
    }
    dummyheader = dummyheader.next;
  }
  while (l1) {
    dummyheader.next = l1;
    l1 = l1.next;
    dummyheader = dummyheader.next;
  }
  while (l2) {
    dummyheader.next = l2;
    l2 = l2.next;
    dummyheader = dummyheader.next;
  }
  return mergedlist.next;
};

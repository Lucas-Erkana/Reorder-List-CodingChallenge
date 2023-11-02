# Reorder List

Given the head of a singly linked list, reorder the list to be on the following form:

```
L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
```

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

## Example

### Example 1
![reorder1linked-list1](https://github.com/Lucas-Erkana/Reorder-List-CodingChallenge/assets/41428579/c78103a4-6be0-4cd6-9744-b39e073e0486)

Input:
```
head = [1,2,3,4]
```

Output:
```
[1,4,2,3]
```

### Example 2
![reorder2-linked-list](https://github.com/Lucas-Erkana/Reorder-List-CodingChallenge/assets/41428579/0eddcb5f-8d02-44f1-8bcd-6fdb8454ca15)

Input:
```
head = [1,2,3,4,5]
```

Output:
```
[1,5,2,4,3]
```

## Constraints

- The number of nodes in the list is in the range [1, 5 * 10^4].
- 1 <= Node.val <= 1000

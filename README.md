# 2023

[AoC 2023](https://adventofcode.com/)

- [x] Day 1
- [] Day 2
- [] Day 3
- [] Day 4
- [] Day 5
- [] Day 6
- [] Day 7
- [] Day 8
- [] Day 9
- [] Day 10
- [] Day 11
- [] Day 12
- [] Day 13
- [] Day 14
- [] Day 15
- [] Day 16
- [] Day 17
- [] Day 18
- [] Day 19
- [] Day 20
- [] Day 21
- [] Day 22
- [] Day 23
- [] Day 24
- [] Day 25

# Reminders

## Arrays

### Sort objects inside an array

```javascript
const compare = (a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

const values = [
  {
    value: "text",
    index: 10,
  },
  {
    value: "hello",
    index: 1,
  },
  {
    value: "hi",
    index: 99,
  },
];

values.sort(compare);
```

# Nice Articles

[Tips and Tricks for Solving Advent of Code's Puzzles](https://auth0.com/blog/advent-of-code-tips-tricks/)

[Breadth First Search or BFS for a Graph](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)

[Depth First Search or DFS for a Graph](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)

[Tree Traversal Techniques – Data Structure and Algorithm Tutorials](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)

[Tree Data Structures in JavaScript for Beginners](https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/)

## Markdown Cheatsheet

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)

# Quick Start

### Example 2023 - day 1

> cd 2023\day-1

> node --watch a.js

and

> node --watch b.js

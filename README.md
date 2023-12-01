[AoC 2023](https://adventofcode.com/)

# Day 1

- git checkout feature/day-1

> cd day-1
> node --watch a.js

and

> cd day-1
> node --watch b.js

# Reminder

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

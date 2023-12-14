// Floyd's Cycle detection algorithm

// this does not work if any value of the array is bigger than the array.length
function hasCycle(arr) {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = arr[slow];
    fast = arr[fast + 1];

    if (slow === fast) {
      return true; // Cycle detected
    }

    if (slow === undefined || fast === undefined) {
      return false; // No cycle found
    }
  }

}

console.log(hasCycle([1, 18, 7, 3, 4, 5, 6, 2, 2, 3])); // Output: true


// In this algorithm:

// tortoise and hare are two pointers that traverse the array.
// arr is the array being examined.
// The expression arr[tortoise] represents moving the tortoise pointer one step forward in the array.
// The expression arr[hare] represents moving the hare pointer two steps forward in the array.
// So, this line essentially updates the positions of tortoise and hare in the array. The idea behind moving tortoise by one step and hare by two steps is that, in the presence of a cycle, the two pointers will eventually meet.

// The loop continues until either the pointers meet (indicating the presence of a cycle) or one of them reaches the end of the array (indicating no cycle). The condition tortoise === hare checks for a meeting point.

// This algorithm is efficient and works in O(n) time complexity, where n is the length of the array, because in the worst case scenario, the pointers traverse the array once. If there's a cycle, they will eventually meet. If there's no cycle, one of them will reach the end of the array.

// This is a widely used algorithm for cycle detection and is commonly applied in various computer science and programming contexts.
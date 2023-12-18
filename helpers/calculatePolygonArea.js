// Shoelace Formula 
// The order of the vertices is crucial when using the shoelace formula. The vertices should be ordered in either clockwise or counterclockwise direction. 
// The formula calculates the area based on the order of the vertices.

// You need to play with the perimeter if you are calculating cubic stuff

// Input example
// [
//   [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 0, 4 ],
//   [ 0, 5 ], [ 0, 6 ], [ 1, 6 ], [ 2, 6 ],
//   [ 3, 6 ], [ 4, 6 ], [ 5, 6 ], [ 5, 5 ],
//   [ 5, 4 ], [ 6, 4 ], [ 7, 4 ], [ 7, 5 ],
//   [ 7, 6 ], [ 8, 6 ], [ 9, 6 ], [ 9, 5 ],
//   [ 9, 4 ], [ 9, 3 ], [ 9, 2 ], [ 9, 1 ],
//   [ 8, 1 ], [ 7, 1 ], [ 7, 0 ], [ 6, 0 ],
//   [ 5, 0 ], [ 5, 1 ], [ 5, 2 ], [ 4, 2 ],
//   [ 3, 2 ], [ 2, 2 ], [ 2, 1 ], [ 2, 0 ],
//   [ 1, 0 ], [ 0, 0 ]
// ]

const calculatePolygonArea = (vertices) => {

  var total = 0

  for (var i = 0, l = vertices.length; i < l; i++) {
    var addX = vertices[i][0]
    var addY = vertices[i == vertices.length - 1 ? 0 : i + 1][1]
    var subX = vertices[i == vertices.length - 1 ? 0 : i + 1][0]
    var subY = vertices[i][1]

    total += (addX * addY * 0.5)
    total -= (subX * subY * 0.5)
  }

  return Math.abs(total)
}
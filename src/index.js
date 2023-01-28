
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {matrix[i].sort((a, b) => b - a)} else {matrix[i].sort((a, b) => a - b)};
    newMatrix = newMatrix.concat(matrix[i])
  }
  return newMatrix;
} else {return [];}
}

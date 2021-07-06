
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];
  const matr = matrix.map((val, index) => val.sort((a, b) => (index % 2 ? b - a : a - b)));
  const flat = matr.reduce((val, acc) => [...val, ...acc], []);
  return flat;
}

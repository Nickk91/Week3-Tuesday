const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let q = 0; listOfNeighbours[i][q]; q++) {
    console.log(`Neighbour: ${listOfNeighbours[i][q]}`);
  }
}

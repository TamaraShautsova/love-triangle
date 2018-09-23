/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var numberOfLoveTriangles = 0;
  for (i = 0; i < preferences.length; i++) {
    if(preferences[i] - 1 == i ) {
      continue;
    }
    if (preferences[preferences[preferences[i]-1]-1]-1 == i) {
      numberOfLoveTriangles++;
      preferences[i] = null; //first
      preferences[preferences[i] - 1] = null; //second
      preferences[preferences[preferences[i]-1]-1] = null; //third
    }
  }
  return numberOfLoveTriangles;
};

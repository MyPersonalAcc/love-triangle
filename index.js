/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for(var i = 0 ; i < preferences.length; i++){
  var	first = preferences[i];
  var	second = preferences[first - 1];
  var	third = preferences[second - 1];
  var fourth = preferences[third-1]; 
    if (fourth === first && first != second) {
      count++;
      preferences[second - 1] = 0;
    }
  }
return count;
};

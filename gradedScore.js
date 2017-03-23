function atheniumGrading(scores) {
scores.sort(function(a, b){
  return b - a;
})
var scoresWithGrades = [];
  var percent = scores.length/5;
  var grades = ["A","B","C","D","F"]
  while(scores.length){
    scoresWithGrades.push(scores.splice(0, percent));
  }
  for (var i in scoresWithGrades){
    scoresWithGrades[i].push(grades[i]);
  }
return scoresWithGrades;
}
console.log(atheniumGrading([99, 92, 91, 91, 89, 85, 83, 82, 80, 79, 78,
78, 77, 76, 75, 74, 62, 55, 43, 20]));

 
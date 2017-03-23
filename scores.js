 function chunks(array) {
  var results = [];
  while (array.length) {
    results.push(array.splice(0, 5));
  }
  return results;
}

chunks( [99, 92, 91, 91, 89, 85, 83, 82, 80, 79, 78,
 78, 77, 76, 75, 74, 62, 55, 43, 20]);


function scores(numArray) {
	numArray.sort(function(a, b){
		return b - a;
	})
  var maxm =  Math.max.apply(null, numArray);
  var minm = Math.min.apply(null, numArray);
  var len = numArray.length/5;
  var grade = ["A", "B", "C", "D", "F"]
  var numScore = [];
  while (numArray.length){
   
     numScore.push(numArray.splice(0, len))

  }
  for(var i in numScore){
  numScore[i].push(grade[i]);
  console.log(numScore[i]);
}
}
scores([99, 92, 91, 91, 89, 85, 83, 82, 80, 79, 78,
 78, 77, 76, 75, 74, 62, 55, 43, 20])
***************************************************************

function scores(scoreArray) {
	scoreArray.sort(function(a, b){
		return b - a;
	})
  var maxm =  Math.max.apply(null, scoreArray);
  var minm = Math.min.apply(null, scoreArray);
  var len = scoreArray.length/5;
  var grade = ["A", "B", "C", "D", "F"]
  var gradedScore = [];
  while (scoreArray.length){
   
     gradedScore.push(scoreArray.splice(0, len))

  }
  for(var i in gradedScore){
  gradedScore[i].push(grade[i]);
  console.log(gradedScore[i]);
}
return gradedScore;
}
scores([99, 92, 91, 91, 89, 85, 83, 82, 80, 79, 78,
 78, 77, 76, 75, 74, 62, 55, 43, 20])


~~~~~~~~~~~````````````~~~~~~~~~~~~~~~~~~~````````````~~~~~~~~~~~~~~~~
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





+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function atheniumGrading(scores) {
//sorting the array in descending order
// scores.sort(function(a, b){return b - a;})

// checking the highest values in the array
var maxm = Math.max(...scores);

// creating an array for grades
var scoresWithGrades = [["A"],["B"],["C"],["D"],["F"]];

  // looping thru the given array
  for (var i in scores){
    // checking if the score is greater greater or equal to 90% for A
    if((scores[i]*100)/maxm >= 90){
       scoresWithGrades[0].push(scores[i]);
       }
    // checking if the score is greater greater or equal to 75% for B
    else if(scores[i]*100/maxm >=75){

      scoresWithGrades[1].push(scores[i])
      
    }
    // checking if the score is greater greater or equal to 60% for C
        else if(scores[i]*100/maxm >=60){

      scoresWithGrades[2].push(scores[i])
    }
    // checking if the score is greater greater or equal to 50% for D
            else if(scores[i]*100/maxm >=50){

      scoresWithGrades[3].push(scores[i])
    }
    // finally the remaing scores are fail 
            else{

      scoresWithGrades[4].push(scores[i])
    }
  }
// returning the final output
 return scoresWithGrades;

}
// printing the result to the console
console.log(atheniumGrading([4,5,9,2]));


*************************************************final ***********************************
function atheniumGrading(scores) {
//sorting the array in descending order
// scores.sort(function(a, b){return b - a;})

// checking the highest values in the array
var maxm = Math.max(...scores);

// creating an array for grades
var scoresWithGrades = [["A"],["B"],["C"],["D"],["F"]];

  // looping thru the given array
  for (var i in scores){
    // checking if the score is greater greater or equal to 90% for A
    if((scores[i]*100)/maxm >= 90){
       scoresWithGrades[0].unshift(scores[i]);
       }
    // checking if the score is greater greater or equal to 75% for B
    else if(scores[i]*100/maxm >=75){

      scoresWithGrades[1].unshift(scores[i])
      
    }
    // checking if the score is greater greater or equal to 60% for C
        else if(scores[i]*100/maxm >=60){

      scoresWithGrades[2].unshift(scores[i])
    }
    // checking if the score is greater greater or equal to 50% for D
            else if(scores[i]*100/maxm >=50){

      scoresWithGrades[3].unshift(scores[i])
    }
    // finally the remaing scores are fail 
            else{

      scoresWithGrades[4].unshift(scores[i])
    }
  }
// returning the final output
 return scoresWithGrades;

}
// printing the result to the console
console.log(atheniumGrading([99, 92, 91, 91, 89, 85, 83, 82, 80, 79, 78,
78, 77, 76, 75, 74, 62, 55, 43, 20]));

++++++++++++++++++++++++++++++++using object+++++++++++++++++++++++++++++++++
function atheniumGrading(scores) {
//sorting the array in descending order
// scores.sort(function(a, b){return b - a;})

// checking the highest values in the array
var maxm = Math.max(...scores);

// creating an array for grades
var scoresWithGrades = [["A"],["B"],["C"],["D"],["F"]];
var objScores ={"A":[],"B":[],"C":[],"D":[],"F":[]};

  // looping thru the given array
  for (var i in scores){
    // checking if the score is greater greater or equal to 90% for A
    if((scores[i]*100)/maxm >= 90){
       scoresWithGrades[0].push(scores[i]);
       objScores.A.push(scores[i]);
      
     
       }
    // checking if the score is greater greater or equal to 75% for B
    else if(scores[i]*100/maxm >=75){

      scoresWithGrades[1].push(scores[i]);
      objScores.B.push(scores[i]);
      
    }
    // checking if the score is greater greater or equal to 60% for C
        else if(scores[i]*100/maxm >=60){

      scoresWithGrades[2].push(scores[i])
      objScores.C.push(scores[i]);
    }
    // checking if the score is greater greater or equal to 50% for D
            else if(scores[i]*100/maxm >=50){

      scoresWithGrades[3].push(scores[i]);
      objScores.D.push(scores[i]);
    }
    // finally the remaing scores are fail 
            else{

      scoresWithGrades[4].push(scores[i])
      objScores.F.push(scores[i]);
    }
  }
// returning the final output
 return [scoresWithGrades, objScores];

}
// printing the result to the console
console.log(atheniumGrading([99, 92, 91, 91, 89, 85, 83, 82, 80, 79, 78,
78, 77, 76, 75, 74, 62, 55, 43, 20]));


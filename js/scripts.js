function answer() {
  var answer1=document.Quiz.q1.value;
  var answer2=document.Quiz.q2.value;
  var answer3=document.Quiz.q3.value;
  var answer4=document.Quiz.q4.value;
  var answer5=document.Quiz.q5.value;
  var answer6=document.Quiz.q6.value;
  var answer7=document.Quiz.q7.value;
  var answer8=document.Quiz.q8.value;
  var answer9=document.Quiz.q9.value;
  var answer10=document.Quiz.q10.value;
  var marks=0
  if (answer1=="choicea") {
          marks+=3;
  }
  if (answer2=="choicea") {
          marks+=3;
  }
  if (answer3=="choiceb") {
          marks+=3;
  }
  if (answer4=="choicec") {
          marks+=3;
  }
  if (answer5=="choicea") {
          marks+=3;
  }
  if (answer6=="choicec") {
          marks+=3;
  }
  if (answer7=="choicea") {
          marks+=3;
  }
  if (answer8=="choicea") {
          marks+=3;
  }
  if (answer9=="choiceb") {
          marks+=3;
  }
  if (answer10=="choicec") {
          marks+=3;
  }
  alert ('you got' + count + 'marks')
}

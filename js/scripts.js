
$(document).ready(function(){
  $("button#submit").click(function(){
  var answer1=$("input:radio[name=q1]:checked").val();
  var answer2=$("input:radio[name=q2]:checked").val();
  var answer3=$("input:radio[name=q3]:checked").val();
  var answer4=$("input:radio[name=q4]:checked").val();
  var answer5=$("input:radio[name=q5]:checked").val();
  var answer6=$("input:radio[name=q6]:checked").val();
  var answer7=$("input:radio[name=q7]:checked").val();
  var answer8=$("input:radio[name=q8]:checked").val();
  var answer9=$("input:radio[name=q9]:checked").val();
  var answer10=$("input:radio[name=q10]:checked").val();
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
  alert('you have'+marks)
  });
});

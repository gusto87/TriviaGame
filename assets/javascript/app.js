
function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;
    

    if (question1 === "GTA San Andreas") {
        correct++;
    }
    if (question2 === "2007") {
        correct++;
    }
    if (question3 === "2008") {
        correct++;
    }
    if (question4 === "2005") {
        correct++;
    }

    var messages = ["awesome sauce!", "ohhh you almost had it", "ehhhhh-okay", "dude wtf are you a baby?"];
    var pictures = ["images/hellyea.png", "images/lisa.png", "images/lisa.png", "images/katt.png"]
    var range;
    if (correct === 0) {
        range = 3;
    }
    if (correct > 0 && correct < 3) {
        range = 2;
    }
    if (correct > 2) {
        range = 1;
    }
    if (correct > 3 && correct === 4) {
        range = 0;
    }
   
        
    
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got" + correct + "correct.";
    document.getElementById("picture").src = pictures[range]
}
  
var timeRemaining = new Date("00:00:00").getTime() + (1000 * 2 )
var totalTime;
var counter = 20
var timer;
var minutes;
var seconds;

// var timeCalculation = function() {
//       // Get today's date and time
//   var now = new Date().getTime();

//   // Find the totalTime between now and the count down date
//   totalTime = timeRemaining - now;
//   //console.log('totalTime:', totalTime)

//   // Time calculations for days, hours, minutes and seconds
//   minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
//   seconds = Math.floor((totalTime % (1000 * 60)) / 1000);
// }


// Update the count down every 1 second
 var start = function() {
    timer = setInterval(countdown, 1000)
  // Display the result in the element with id="demo"
  console.log('what is this div?', document)
  
}

  // If the count down is finished, write some text and reset the game
var countdown = function() {
    counter--
    document.getElementById("demo").innerHTML = `Time left: ${counter}s`
    if (counter <= 0) {
      document.getElementById("demo").innerHTML = "TIMES UP!!!";
      finished();
  }
}

var finished = function() {
    clearInterval(timer);
    check();
    /*setTimeout(function() {
        console.log('set timeout hit within distance check')
       ;
    }, 1000)*/
}



start();

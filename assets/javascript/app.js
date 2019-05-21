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
    if (correct > 1 && correct < 3) {
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
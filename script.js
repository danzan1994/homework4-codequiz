var score = 0;
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var highscore = document.querySelector(".highscore")
var buttonsrow = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var timerInterval;
var correctsound = document.querySelector(".correct");
var wrongsound = document.querySelector(".wrong");
var cw = document.querySelector(".cw");
var cwtime = 2;
var seconds = 60;
var a1;
var a2;
var a3;
var a4;

function quizopening() {
    highscore.style.visibility = "hidden";

    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Start Quiz";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        question1();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "View Scores";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        scorepage();
    });
}
quizopening();

//Timer
function countdown() {
    timerInterval = setInterval(function() {
    seconds --;
    timer.textContent = "Time left: " + seconds;
        if (seconds <= 0) {
            clearInterval (timerInterval);
            seconds = 0;
            timer.textContent = "Time left: 0"
            postquiz();
        }
    }, 1000);
}

function timepoints() {
    score += seconds;
}

function correct() {
    correctsound.play();
}

function correctcw() {
    var yesInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color: rgb(112, 177, 112)")
    cw.textContent = "Correct!";
        if (cwtime <= 0) {
            clearInterval (yesInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

function wrong() {
    wrongsound.play();
    seconds -=5;
}

function wrongcw() {
    var noInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color:rgb(185, 80, 80)");
    cw.textContent = "Wrong!";
        if (cwtime <= 0) {
            clearInterval (noInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

//Question 1 
function question1() {
    a1.remove();
    a2.remove();
    countdown();
    question.textContent = "Inside which tag of an HTML document do you put the JavaScript?";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Head";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Body";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Java";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Script";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        question2();
        correct();

    });
}

//Question 2 
function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "The condition in an if/else statement is enclosed within ______?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Brackets";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Parentheses";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question3();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Quotes";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Curly Brackets";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
}

//Question 3 
function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Which type of pop up box will allow a user to type a response?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Alert";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Prompt";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question4();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Inpute";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Confirm";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
}

//Question 4 
function question4() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "What is a DOM in JavaScript?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Document Object Model";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        correctcw();
        question5();
        correct();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Data Object Modal";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Data of Mine";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Document of Master";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });
}

//Question 5 layout.
function question5() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Is JS case-sensitive?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Yes";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        correctcw();
        question6();
        correct();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "No";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "It does not matter";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });

}

//Question 6 layout.
function question6() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "The C in CSS stands for: ";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Cursive";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        postquiz();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Coded";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        postquiz();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Cascading";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        correctcw();
        postquiz();
        correct();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Coding";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        postquiz();
        wrong();
    });
}



//Post-Quiz 
function postquiz() {
    timepoints();
    seconds = 0; 
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    highscore.style.visibility = "visible";
    question.textContent = "Score: " + score + ". Enter your initials below."
    
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Submit";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}

// //High score 
// function scorepage() {
//     clearInterval (timerInterval);
//     a1.remove();
//     a2.remove();
//     highscore.style.visibility = "hidden";
//     banner.textContent = "High Scores"
    
//     question.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
//     a1 = document.createElement("BUTTON");
//     a1.innerHTML = "Restart Quiz";
//     document.body.children[4].appendChild(a1);
//     a1.addEventListener("click", function () {
//         location.reload();
//     });

//     a2 = document.createElement("BUTTON");
//     a2.innerHTML = "Clear Scores";
//     document.body.children[4].appendChild(a2);
//     a2.addEventListener("click", function () {
//         localStorage.clear();
//         question.textContent = "";
//     });
// }
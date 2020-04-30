(function(){
  function buildQuiz(){
    var output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        var answers = [];

        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keeps track of user's answers
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  var myQuestions = [
    {
      question: "Inside which tag of an HTML document do you put the JavaScript?",
      answers: {
        a: "Body",
        b: "Java",
        c: "Script"
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if/else statement is enclosed within ______.?",
      answers: {
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses"
      },
      correctAnswer: "c"
    },
    {
      question: "Which type of pop up box will allow a user to type a response?",
      answers: {
        a: "Alert",
        b: "Input",
        c: "Confirm",
        d: "Prompt"
      },
      correctAnswer: "d"
    },
    {
      question: "What is a DOM in JavaScript?",
      answers: {
        a: "Data of Mine",
        b: "Document of Master",
        c: "Data Object Modal",
        d: "Document Object Model"
      },
      correctAnswer: "d"
    },  
    {
      question: "Is JS case-sensitive?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Maybe So"
      },
      correctAnswer: "a"
    }  
  ];




  buildQuiz();

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);


  var countDownDate = new Date();
		countDownDate.setSeconds(countDownDate.getSeconds() + 60);

		var x = setInterval(function() {

		var now = new Date().getTime();

		var distance = countDownDate - now;

		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("demo").innerText = "Time Remaining: " + seconds + "s ";

		if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerText = "Time's Up!";
		}

		}, 1000);

  
})();
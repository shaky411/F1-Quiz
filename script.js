// Notes
// FUNCTIONS
// function to start quiz
// Function to render a question
// Function to handle next Question
// Function to handle selected answer
// function to get correct answer
// function to track score
// function to end quiz
// function to submit results

// Useful info:
// use event delegation
// only need 1 event listeners
// local storage needed for high score
// Structure the DATA
// Carasel activity

// DOM Elements
const feedbackEl = document.getElementById("feedback");
const timerEl = document.getElementById("time");
const finalScoreEl = document.getElementById("final-score");
const questionEl = document.getElementById("questions");
const feedback = document.querySelector('#feedback');

function hideResult() {
    feedback.style.display = "none";
  }

// Global Variabls
let incorrectCount =-10;
let currentQ = 0;
let secondsLeft = 100;
let timerId;
let finalScore;

// Questions
// This is an array of objects to store my questions, possible answers and correct answer.
let questions = [

    {
        question: "Which driver has the most pole positions in F1 history?",
        choices: ["Sebastian Vettel", "Fernando Alonso", "Lewis Hamilton"],
        answer: "Lewis Hamilton"
    },

    {
        question: "What is the longest cicuit on the current F1 Calendar?",
        choices: ["Spa", "Silverstone", "Monza"],
        answer: "Spa"
    },

    {
        question: "Driver with the most wins in F1 history is?",
        choices: ["Max Verstappen", "Jenson Button", "Lewis Hamilton"],
        answer: "Lewis Hamilton"
    },

    {
        question: "The most successful team in F1 is?",
        choices: ["McLaren", "Ferrari", "Mercedes"],
        answer: "Ferrari"
    },

    {
        question: "Who is the youngest driver to win an F1 race",
        choices: ["Sebastian Vettel", "Charles Leclerc", "Max Verstappen"],
        answer: "Max Verstappen"
    },

    {
        question: "Driver with the most wins in an F1 season is?",
        choices: ["Sebastian Vettel", "Max Verstappen", "Lewis Hamilton"],
        answer: "Max Verstappen"
    },

    {
        question: "Who is the current tyre supplier in F1?",
        choices: ["Pirelli", "Bridgestone", "Michelin"],
        answer: "Pirelli"
    },

    {
        question: "What is the shortest circuit on the current F1 calendar?",
        choices: ["Monaco", "Redbull Ring", "Zandvoort"],
        answer: "Monaco"
    }

];

// Timer Function //
function startTime() {
    timerEl.textContent = secondsLeft;
        timerId = setInterval(
        () => {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timerId);
                gameEnd();
            }

        }, 1000);
}

// Start Quiz button //
let startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz)

// Handle start button //
function startQuiz(event) {
    event.preventDefault()
    console.log("Start quiz trigerred")

    // Switch from start screen to quiz
    let startScreen = document.getElementById("start-screen")
    startScreen.classList.add("hide")
    
    // Show first question
    questionEl.classList.toggle("hide");

    // Render first question and start timer
    renderQuestion();
    startTime();
}

// Show the questions to the user //
function renderQuestion() {
    const currentQuestion = questions[currentQ].question
    // console.log(currentQuestion)

    // CREATES A VARIABLE AND STORES THE HTML ELEMENT WE WANT TO TARGET
    let questionTitle = document.getElementById("question-title");
    // RENDERS OUR CURRENT QUESTION TO THE ELEMENT <h2 id="question-title"></h2>
    questionTitle.textContent = currentQuestion

    let choicesContainer = document.getElementById("choices")
    for (let i = 0; i < questions[currentQ].choices.length; i++) {
        // Create a button element
        let button = document.createElement("button")
        // apply my choices to the buttons
        button.textContent = questions[currentQ].choices[i]
        button.addEventListener("click", checkAnswer)
        choicesContainer.append(button)
    }
}


// This checks the answers //
function checkAnswer(event) {
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    
    // get the correct answer
    if (event.target.textContent === questions[currentQ].answer) {
        // If the answer is correct, show these
    feedbackEl.textContent = "Correct";
    feedbackEl.style.color = "#51ECA0";
    feedbackEl.style.fontSize = "50px";
    } else {
        // If the answer is incorrect
        // Decrement Timer
        secondsLeft -= 10;
        if (secondsLeft <= 0) {
            secondsLeft = 0;
        }
        // Update the timer
        timerEl.textContent = secondsLeft;
        // and show these
        feedbackEl.textContent = "Wrong";
        feedbackEl.style.color = "#FA3A52";
        feedbackEl.style.fontSize = "50px";
    };

    feedbackEl.setAttribute("class", "feedback");
    document.getElementById("choices").innerHTML = "";
    // goes to next question

    setTimeout(
        () => {
            feedbackEl.setAttribute('class', 'hide');
            // alert("timeout")
            
        }, 500);

    currentQ++;

    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        gameEnd();
    }
}

// End the quiz //
function gameEnd() {

    
    // Hide questions-container
    questionEl.classList.add("hide");
    // Timer needs to stop - clearInterval?
    clearInterval(timerId);
    // Show end screen
    let endGameContainer = document.getElementById("end-screen")
    endGameContainer.classList.toggle("hide");

    // Render score on end screen
    getScore();
}

// Get the score
function getScore() {
    let score = document.getElementById('final-score');
    score.textContent = secondsLeft;
}









// Enter initials and submit score //
// const submit = document.querySelector('#submit');
let initialsInput = document.querySelector('#initials');
let logScore = document.querySelector('#highscores');
let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener('click', submitScore);


function submitScore(event) {
    event.preventDefault();
    
    if (!initialsInput.value) {
        console.log("Submit button clicked!");
        return;
    }

    let leaderboardItem = {
        initials: inputElement.value,
        score: secondsLeft,
    };
    
    }











// Submit score button //
// let submitBtn = document.getElementById('submit');





// Shortcut function
// function changeState(current, next) {
//     document.getElementById(current).classList.add('hide');
//     document.getElementById(next).removeAttribute('class');

// }

// // set attribute
// const button = document.querySelector('button');

// button.setAttribute("name", "helloButton");
// button.setAttribute("disabled", "");








// const submitButton = document.querySelector("#submit-button");
//   const inputElement = document.querySelector("#initials");
  
//   //store user initials and score when submit button is clicked
//   submitButton.addEventListener("click", storeScore);
  
//   function storeScore(event) {
//     //prevent default behaviour of form submission
//     event.preventDefault();
  
//     //check for input
//     if (!inputElement.value) {
//       alert("Please enter your initials before pressing submit!");
//       return;
//     }
  
//     //store score and initials in an object
//     let leaderboardItem = {
//       initials: inputElement.value,
//       score: time,
//     };
  
//     updateStoredLeaderboard(leaderboardItem);
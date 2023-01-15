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
        answer: "Lewis Hamilton"
    },

    {
        question: "Who is the current tyre supplier in F1?",
        choices: ["Pirelli", "Bridgestone", "Michelin"],
        answer: "Pirelli"
    }

];

// Handle start button
function startQuiz(event) {
    event.preventDefault()
    console.log("Start quiz trigerred")

    // Switch from start screen to quiz
    let startScreen = document.getElementById("start-screen")
    startScreen.classList.add("hide")
    
    // Show first question
    // let questionContainer = document.getElementById("questions")
    // questionContainer.classList.toggle("hide");
    questionEl.classList.toggle("hide");

    // Display first question and start timer
    renderQuestion();
    startTime();
}

function startTime() {
    timerEl.textContent = secondsLeft;
    let timerInterval = setInterval(
        () => {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                gameEnd();
            }

        }, 1000);
}

// {question: "Which driver has the most pole positions in F1 history?", 
// choices: ["Sebastian Vettel", "Fernando Alonso", "Lewis Hamilton"], 
// answer: 3},

// Show the questions to the user
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

// This checks the answers
function checkAnswer(event){
    event.preventDefault()
    // console.log(event)
    // console.log(event.target)

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
    // let questionContainer = document.getElementById("questions")
    // questionContainer.innerHTML.add("hide");


    // goes to next question
    currentQ ++;


    if (currentQ === questions.length) {
        gameEnd();
    } else {
        renderQuestion();
    }
}

function gameEnd() {

    // Hide questions-container
    questionEl.classList.add("hide");
    // Timer needs to stop - clearInterval
    clearInterval(timerId);

    // Show end
    let endGameContainer = document.getElementById("end-screen")
    endGameContainer.classList.toggle("hide");

    // timer = score
}


let startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz)


// Shortcut function
// function changeState(current, next) {
//     document.getElementById(current).classList.add('hide');
//     document.getElementById(next).removeAttribute('class');

// }

// // set attribute
// const button = document.querySelector('button');

// button.setAttribute("name", "helloButton");
// button.setAttribute("disabled", "");



// Notes for my meeting tutor:
// getElementByID
// querySlector
// CreateElement
// appendChild
// How do these enable me to allow the JS and HTML to communicate?

// event keyword!

const timerEl = document.getElementById("time");
const answerOne = document.getElementById("choices");
const answerTwo = document.getElementById("choices");
const answerThree = document.getElementById("choices");

// Decrement this value
let count = 100;
let incorrectCount = -10;
let currentQ = 0;

// const lastQuestion = questions.length -1;

// When the start quiz button is clicked, count needs to start decreasing.
// question 1 needs to be displayed.

// Questions
// This is an array of objects to store my questions, possible answers and correct answer.
let questions = [

    {
        question: "Which driver has the most pole positions in F1 history?",
        choices: ["Sebastian Vettel", "Fernando Alonso", "Lewis Hamilton"],
        answer: 3
    },

    {
        question: "What is the longest cicuit on the current F1 Calendar?",
        choices: ["Spa", "Silverstone", "Monza"],
        answer: 1
    },

    {
        question: "Driver with the most wins in F1 history is?",
        choices: ["Max Verstappen", "Jenson Button", "Lewis Hamilton"],
        answer: 3
    },

    {
        question: "The most successful team in F1 is?",
        choices: ["McLaren", "Ferrari", "Mercedes"],
        answer: 2
    },

    {
        question: "Who is the youngest driver to win an F1 race",
        choices: ["Sebastian Vettel", "Charles Leclerc", "Max Verstappen"],
        answer: 3
    },

    {
        question: "Driver with the most wins in an F1 season is?",
        choices: ["Sebastian Vettel", "Max Verstappen", "Lewis Hamilton"],
        answer: 2
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
    let questionContainer = document.getElementById("questions")
    questionContainer.classList.toggle("hide");

    // startTimer();
    renderQuestion()
}

// FUNCTIONS
// function to start quiz - Display first question & possible answers
// Function to handle next Question
// Function to handle selected answer
// function to get correct answer
// function to end quiz
// function to submit results


// {question: "Which driver has the most pole positions in F1 history?", 
// choices: ["Sebastian Vettel", "Fernando Alonso", "Lewis Hamilton"], 
// answer: 3},
// Show the questions to the user
function renderQuestion() {
    const currentQuestion = questions[currentQ].question
    console.log(currentQuestion)

    let questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion

    var choicesContainer = document.getElementById("choices")
    for (let i = 0; i < questions[currentQ].choices.length; i++) {
        var button = document.createElement("button")
        console.log(button)
        button.textContent = questions[currentQ].choices[i]
        button.addEventListener("click", checkAnswer)
        choicesContainer.append(button)
    }
}

function checkAnswer(event){
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    //did I answer correctly?
   

    //are you done with the quiz? If you aren't
    //cuurentQ += 1
    //renderQuestion()

    //endQuiz()
}



let startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz)

// Step one - WHEN I click the start quiz THEN the first question appears
// What needs to happen here?


// Step two - WHEN the question appears THEN there is one question AND 4 possible answers
// Step three - WHEN I click the answer THEN it checks if the answer is correct or incorrect
// Step four - WHEN I click the correct answer THEN the score increases ...

// Useful info:
// use event delegation
// only need 1 event listeners
// local storage needed for high score
// Structure the DATA
// Carasel activity
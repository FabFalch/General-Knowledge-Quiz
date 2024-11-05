/*Establishing The Elements*/
const theQuestion = document.getElementById('the-question');
const theAnswers = document.getElementById('the-answers');
const theResult = document.getElementById('the-result');
const startBtn = document.getElementById('startBtn')
const theScore = document.getElementById('the-score')
const instructions = document.querySelector('.instruction');
const playAgainBtn = document.getElementById('play-again-btn')
const welcomeHeader = document.getElementById('welcome-header')

/*The Quiz*/

/*The Question Array*/
let questionArray = [
    { question: 'What is the capital of France?', choice: ['Berlin', 'Madrid', 'Paris'], answer: 2 },
    { question: 'Who wrote "Romeo and Juliet"?', choice: ['William Wordsworth', 'William Shakespeare', 'Charles Dickens'], answer: 1 },
    { question: 'What is the largest planet in our Solar System?', choice: ['Earth', 'Jupiter', 'Mars'], answer: 1 },
    { question: 'What year did World War II end?', choice: ['1941', '1945', '1950'], answer: 1 },
    { question: 'Which element has the chemical symbol "O"?', choice: ['Gold', 'Oxygen', 'Iron'], answer: 1 },
    { question: 'What is the hardest natural substance on Earth?', choice: ['Gold', 'Iron', 'Diamond'], answer: 2 },
    { question: 'Who painted the Mona Lisa?', choice: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'], answer: 0 },
    { question: 'How many continents are there?', choice: ['5', '6', '7'], answer: 2 },
    { question: 'Which planet is known as the Red Planet?', choice: ['Mars', 'Venus', 'Mercury'], answer: 0 },
    { question: 'What is the largest ocean on Earth?', choice: ['Atlantic', 'Indian', 'Pacific'], answer: 2 }
];

playAgainBtn.style.display = 'none'
let currentScore = 0;
let currentQuestionIndex = 0;

startBtn.addEventListener('click',()=> {
    
    startQuiz()
    instructions.style.display = 'none'

})


function startQuiz(){
//Making the start Button 'vanish'
playAgainBtn.style.display = 'none'
theScore.textContent = ''
startBtn.style.display = 'none';
welcomeHeader.style.visibility = 'hidden';
currentQuestionIndex = 0;
currentScore = 0;
displayQuestion();

};



function displayQuestion() {
    // Check if there are questions left
    if (currentQuestionIndex < questionArray.length) {
        let currentQuestion = questionArray[currentQuestionIndex];
        theQuestion.innerHTML = currentQuestion.question;
        theAnswers.innerHTML = ''; // Clear previous answers
        
        // Creating a button for each choice
        currentQuestion.choice.forEach((choice, index) => {
            let choiceButton = document.createElement('button');
            choiceButton.textContent = choice;
            choiceButton.classList.add('choice-btn');
            choiceButton.addEventListener('click', () => checkAnswer(index));
            theAnswers.appendChild(choiceButton);
        });
    } else {
        theQuestion.innerHTML = "Quiz Complete!";
        theAnswers.innerHTML = ''; 
        theResult.textContent = ''; 
        theScore.textContent = `You Scored ${currentScore} Out Of 10!`
        playAgainBtn.style.display = 'block';
    }
}


function checkAnswer(selectedIndex){
   let currentQuestion = questionArray[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer){
        theResult.textContent = 'Correct!';
        theResult.style.color = 'var(--emerald-green)'
        currentScore++

    } else {
        theResult.textContent = 'Incorrect!'
        theResult.style.color = 'var(--coral-red)'
    }
    
    setTimeout(()=>{
        currentQuestionIndex++;
        theResult.textContent = '';
        displayQuestion()


    },1000)
};

playAgainBtn.addEventListener('click',() => {
    startQuiz()


});
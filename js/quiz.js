
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get('id');

    if (!quizId) {
        alert('Invalid quiz ID. Please provide a valid ID.');
        window.location.href = 'index.html';
        return;
    }


    const quizzes = getQuizzes();
    currentQuiz = quizzes.find(quiz => quiz.id === quizId);

    if (!currentQuiz) {
        alert('Invalid quiz ID. Please provide a valid ID.');
        window.location.href = 'index.html';
        return;
    }

    setupQuiz();

}

function setupQuiz() {
    document.getElementById('quizTitle').textContent = currentQuiz.title;
    document.getElementById('totalQuestions').textContent = currentQuiz.questions.length;

    userAnswers = new Array(currentQuiz.questions.length).fill(null);

    showQuestion(0);
    setupEventListeners();
}

function showQuestion(index) {
    currentQuestionIndex = index;
    const question = currentQuiz.questions[index];

    document.getElementById('currentQuestionNumber').textContent = index + 1;

    const container = document.getElementById('questionContainer');
    container.innerHTML = '';

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.text;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = i;

        if (userAnswers[index] === i) {
            radio.checked = true;

        }

        optionDiv.addEventListener('click', () => {
            radio.checked = true;
            userAnswers[index] = i;

        });

        const label = document.createElement('span');
        label.textContent = option;

        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        optionsDiv.appendChild(optionDiv);

    });

    questionDiv.appendChild(optionsDiv);
    container.appendChild(questionDiv);

    updateButtons();
}



function updateButtons() {
    const homeBtn = document.getElementById('homeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (currentQuestionIndex === 0) {
        homeBtn.style.display = 'block';
        prevBtn.style.display = 'none';
    } else {
        homeBtn.style.display = 'none';
        prevBtn.style.display = 'block';
    }

    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function showResults() {
    let correct = 0;

    const scoreElement = document.getElementById('score');
    const totalElement = document.getElementById('total');

    currentQuiz.questions.forEach((question, i) => {
        if (userAnswers[i] === question.correctAnswer) {
            correct++;
        }
    });


    scoreElement.textContent = correct;
    totalElement.textContent = currentQuiz.questions.length;

    document.getElementById('questionContainer').style.display = 'none';
    document.querySelector('.quiz-controls').style.display = 'none';
    document.querySelector('.quiz-progress').style.display = 'none';
    document.getElementById('quizTitle').style.display = 'none';

    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('restartBtn').addEventListener('click', () => {
        location.reload();
    });
}

function setupEventListeners() {
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitBtn').addEventListener('click', showResults);



}

if (window.location.pathname.includes('quiz.html')) {
    document.addEventListener('DOMContentLoaded', startQuiz);
}
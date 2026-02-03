function displayQuizzes() {
    const container = document.getElementById('quizzesList');
    const quizzes = getQuizzes();

    if (quizzes.length === 0) {
        container.innerHTML = '<p>No quizzes found</p>';
        return;
    }


    container.innerHTML = '';

    quizzes.forEach(quiz => {

        const quizCard = document.createElement('div');
        quizCard.className = 'quiz-card';

        const title = document.createElement('h3');
        title.textContent = quiz.title;
        quizCard.appendChild(title);

        const description = document.createElement('p');
        description.textContent = quiz.description;
        quizCard.appendChild(description);

        const startButton = document.createElement('a');
        startButton.href = `quiz.html?id=${quiz.id}`;
        startButton.className = 'start-btn';
        startButton.textContent = 'Start Quiz';
        quizCard.appendChild(startButton);

        container.appendChild(quizCard);

    });

}

if (document.getElementById('quizzesList')) {
    document.addEventListener('DOMContentLoaded', displayQuizzes);
}
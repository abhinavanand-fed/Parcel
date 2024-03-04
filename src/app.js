const quizData = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'What is 2 + 2?',
      choices: ['3', '4', '5', '6'],
      answer: '4'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars'
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const scoreElement = document.getElementById('score');
  const nextButton = document.getElementById('next');
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = '';
    question.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => checkAnswer(choice));
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(choice) {
    const question = quizData[currentQuestion];
    if (choice === question.answer) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      endGame();
    }
  }
  
  function endGame() {
    questionElement.textContent = 'Quiz completed!';
    choicesElement.innerHTML = '';
    nextButton.style.display = 'none';
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      endGame();
    }
  });
  
  showQuestion();
  
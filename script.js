let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);

  const q = questions[currentQuestion];

  document.querySelector(".card").innerHTML = `
    <h1>QuizVerse</h1>

    <h3>Question ${currentQuestion + 1} / ${questions.length}</h3>

    <h2 id="timer">⏳ 15</h2>

    <p>${q.question}</p>

    ${q.options.map((option, index) =>
      `<button onclick="checkAnswer(${index})">${option}</button>`
    ).join("")}

    <br>
    <h3>Score : ${score}</h3>
  `;

  startTimer();
}

function startTimer() {
  timeLeft = 15;

  document.getElementById("timer").textContent = "⏳ " + timeLeft;

  timer = setInterval(() => {
    timeLeft--;

    const timerElement = document.getElementById("timer");
    if (timerElement) {
      timerElement.textContent = "⏳ " + timeLeft;
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(-1);
    }
  }, 1000);
}

function checkAnswer(selected) {
  clearInterval(timer);

  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.querySelector(".card").innerHTML = `
      <h1>🎉 Quiz Finished!</h1>
      <h2>Your Score</h2>
      <h1>${score} / ${questions.length}</h1>

      <button onclick="startQuiz()">Play Again</button>
    `;
  }
}

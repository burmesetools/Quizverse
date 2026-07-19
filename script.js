let currentQuestion = 0;
let score = 0;
let lives = 3;
let timeLeft = 15;
let timer;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  lives = 3;
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);

  const q = questions[currentQuestion];

  document.querySelector(".card").innerHTML = `
    <h1>🎵 QuizVerse</h1>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
      <span>❤️ ${"❤️".repeat(lives)}</span>
      <span id="timer">⏳ 15</span>
      <span>⭐ ${score}</span>
    </div>

    <h3>Question ${currentQuestion + 1}/${questions.length}</h3>

    <p>${q.question}</p>

    ${q.options.map((option, index) =>
      `<button onclick="checkAnswer(${index})">${option}</button>`
    ).join("")}
  `;

  startTimer();
}

function startTimer() {
  clearInterval(timer);

  timeLeft = 15;
  document.getElementById("timer").textContent = "⏳ " + timeLeft;

  timer = setInterval(() => {
    timeLeft--;

    const timer = document.getElementById("timer");
    if (timer) {
      timer.textContent = "⏳ " + timeLeft;
    }

    if (timeLeft <= 0) {
      clearInterval(window.timer);
      checkAnswer(-1);
    }
  }, 1000);

  window.timer = timer;
}

function checkAnswer(selected) {
  clearInterval(window.timer);

  if (selected === questions[currentQuestion].answer) {
    score++;
  } else {
    lives--;
  }

  if (lives <= 0) {
    document.querySelector(".card").innerHTML = `
      <h1>💀 Game Over</h1>
      <h2>Final Score: ${score}</h2>
      <button onclick="startQuiz()">🔄 Play Again</button>
    `;
    return;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    document.querySelector(".card").innerHTML = `
      <h1>🏆 You Win!</h1>
      <h2>${score}/${questions.length}</h2>
      <button onclick="startQuiz()">🔄 Play Again</button>
    `;
    return;
  }

  showQuestion();
}

function showLeaderboard() {
  alert("🏆 Leaderboard (Coming Soon)");
}

function showAbout() {
  alert("QuizVerse v1.0\nMade with ❤️");
}

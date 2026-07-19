
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;
function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.querySelector(".card").document.querySelector(".card").innerHTML = `
  <h2>Question ${currentQuestion + 1}/${questions.length}</h2>

  <h3 id="timer">⏳ 15</h3>

  <p>${q.question}</p>

  ${q.options.map((option, index) =>
    `<button onclick="checkAnswer(${index})">${option}</button><br><br>`
  ).join("")}
`;=startTimer(); `
    <h1>QuizVerse</h1>
    <h3>Question ${currentQuestion + 1}/${questions.length}</h3>
    <p>${q.question}</p>

    <div>
      ${q.options.map((option, index) => 
        `<button onclick="checkAnswer(${index})">${option}</button>`
      ).join("")}
    </div>

    <h3>Score: ${score}</h3>
  `;
}


function checkAnswer(selected) {
clearInterval(timer);
  const correct = questions[currentQuestion].answer;

  if(selected === correct){
    score++;
    alert("Correct 🎉");
  }
  else{
    alert("Wrong ❌");
  }

  currentQuestion++;

  if(currentQuestion < questions.length){
    showQuestion();
  }
  else{
    document.querySelector(".card").innerHTML = `
      <h1>Game Over 🎮</h1>
      <h2>Your Score: ${score}/${questions.length}</h2>
      <button onclick="location.reload()">Play Again</button>
    `;
  }
}
function startTimer() {
  clearInterval(timer);
  timeLeft = 15;

  timer = setInterval(() => {
    timeLeft--;
document.getElementById("timer").textContent = "⏳ " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(-1);
    }
  }, 1000);
}

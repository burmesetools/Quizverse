
let currentQuestion = 0;
let score = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.querySelector(".card").innerHTML = `
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

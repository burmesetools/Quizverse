const questions = [
  {
    question: "Which country is famous for the Eiffel Tower?",
    options: ["Myanmar", "France", "Japan", "Brazil"],
    answer: 1
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.querySelector(".card").innerHTML = `
    <h2>Question ${currentQuestion + 1}/${questions.length}</h2>
    <p>${q.question}</p>
    ${q.options.map((option, index) =>
      `<button onclick="checkAnswer(${index})">${option}</button><br><br>`
    ).join("")}
  `;
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.querySelector(".card").innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your Score: ${score}/${questions.length}</p>
      <button onclick="location.reload()">Play Again</button>
    `;
  }
}

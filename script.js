function startQuiz() {
  document.querySelector(".card").innerHTML = `
    <h2>Question 1 / 1</h2>
    <p>Which country is famous for the Eiffel Tower?</p>

    <button onclick="checkAnswer(0)">Myanmar</button><br><br>
    <button onclick="checkAnswer(1)">France</button><br><br>
    <button onclick="checkAnswer(2)">Japan</button><br><br>
    <button onclick="checkAnswer(3)">Brazil</button>
  `;
}

function checkAnswer(answer) {
  if (answer === 1) {
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong!");
  }
}

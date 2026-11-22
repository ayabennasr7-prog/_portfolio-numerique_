const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "🌙";
  } else {
    themeButton.textContent = "☀️";
  }
});

function verifierQuiz() {
    let score = 0;

    for (let i = 1; i <= 3; i++) {
        const reponse = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );

        if (reponse === null) {
            document.getElementById("resultatQuiz").textContent =
                "Réponds à toutes les questions avant de valider ! 💗";
            return;
        }

        score += Number(reponse.value);
    }

    document.getElementById("resultatQuiz").textContent =
        "Ton score : " + score + "/3 🌸 " +
        (score === 3 ? "Excellent travail !" : "Continue à apprendre !");
}

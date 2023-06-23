var questions = [
    {
        question: "프랑스의 수도는?",
        choices: ["런던", "파리", "베를린", "로마"],
        correctAnswer: 1
    },
    {
        question: "태양계에서 가장 큰 행성은?",
        choices: ["목성", "토성", "해왕성", "지구"],
        correctAnswer: 0
    },
    {
        question: "모나리자를 그린 사람은?",
        choices: ["피카소", "고흐", "레오나르도 다빈치", "원종우"],
        correctAnswer: 2
    },
    {
        question: "원종우의 생년월일은?",
        choices: ["060101", "050101", "060103", "060111"],
        correctAnswer: 0
    }
];

var currentQuestionIndex = 0;
var score = 0;

function displayQuestion() {
    var question = questions[currentQuestionIndex];
    var questionElement = document.getElementById("question");
    questionElement.textContent = question.question;

    var choices = document.getElementById("choices").getElementsByTagName("button");
    for (var i = 0; i < choices.length; i++) {
        choices[i].textContent = question.choices[i];
    }
}

function checkAnswer(answerIndex) {
    var question = questions[currentQuestionIndex];
    if (answerIndex === question.correctAnswer) {
        score++;
        document.getElementById("score").textContent = score;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    displayQuestion();
}

function endGame() {
    alert("Game over! Your final score is " + score);
}

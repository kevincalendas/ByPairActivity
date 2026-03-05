let score = 0;
let mistakes = 0;

const scorething = document.getElementById('ScoreH1');
const mistakesthing = document.getElementById('MistakesH1');

function CorrectAnswer() {
    score += 1;
}

function Mistakes() {
    mistakes += 1;
}

function CorrectAnswerDirect() {
    score += 1;

    setTimeout(() => {
        window.location.href="TotalScore.html";
        localStorage.setItem("score", score);
        localStorage.setItem("Mistakes", mistakes);
        setTimeout(() => {
            scorething.innerHTML = "Total correct answers: " + score;
            mistakesthing.innerHTML = "Total mistakes:" + mistakes;
        }, 500);
    }, 1000);
}

function MistakesDirect() {
    mistakes += 1;
    setTimeout(() => {
        window.location.href="TotalScore.html";
        setTimeout(() => {
            scorething.innerHTML = "Total correct answers: " + score;
            mistakesthing.innerHTML = "Total mistakes:" + mistakes;
        }, 500);
    }, 1000);
}



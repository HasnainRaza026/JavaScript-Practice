const picks = ["rock", "paper", "scissors"];
let scoreTracker = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

function checkWinner(myPick) {
    const computerPick = picks[Math.floor(Math.random() * picks.length)];

    if (myPick === computerPick) {
        scoreTracker.tie++;
        document.querySelector(".js-result").innerText = "Tie.";
        document.querySelector(".js-picks").innerHTML = `You <img src="Assets/${myPick}-emoji.png" alt="rock"> Computer <img src="Assets/${computerPick}-emoji.png" alt="paper">`;
        document.querySelector(".js-score").innerText = `Wins: ${scoreTracker.win}, Losses: ${scoreTracker.lose}, Ties: ${scoreTracker.tie}`;
    } 
    
    else if (
        (myPick === 'rock' && computerPick === 'scissors') ||
        (myPick === 'paper' && computerPick === 'rock') ||
        (myPick === 'scissors' && computerPick === 'paper')
    ) {
        scoreTracker.win++;
        document.querySelector(".js-result").innerText = "You Win.";
        document.querySelector(".js-picks").innerHTML = `You <img src="Assets/${myPick}-emoji.png" alt="rock"> Computer <img src="Assets/${computerPick}-emoji.png" alt="paper">`;
        document.querySelector(".js-score").innerText = `Wins: ${scoreTracker.win}, Losses: ${scoreTracker.lose}, Ties: ${scoreTracker.tie}`;
    } 
    
    else {
        scoreTracker.lose++;
        document.querySelector(".js-result").innerText = "You Lose.";
        document.querySelector(".js-picks").innerHTML = `You <img src="Assets/${myPick}-emoji.png" alt="rock"> Computer <img src="Assets/${computerPick}-emoji.png" alt="paper">`;
        document.querySelector(".js-score").innerText = `Wins: ${scoreTracker.win}, Losses: ${scoreTracker.lose}, Ties: ${scoreTracker.tie}`;
    }

    // Save the updated scores to localStorage
    localStorage.setItem('score', JSON.stringify(scoreTracker));
}

function resetScore() {
    scoreTracker = { win: 0, lose: 0, tie: 0 };
    document.querySelector(".js-score").innerText = `Wins: ${scoreTracker.win}, Losses: ${scoreTracker.lose}, Ties: ${scoreTracker.tie}`;
    localStorage.setItem('score', JSON.stringify(scoreTracker));
}
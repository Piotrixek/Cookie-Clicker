let score = 0;
let doubleScoreTier = 0;
let doubleScoreBonus = 0;
let autoClickerTier = 0;
let autoClickerBonus = 10;
let autoClickerInterval;
let clicks = 0; // Number of clicks
let startTime = Date.now(); // Time when the page was loaded

function onCookieClick() {
  // Add 1 point to the player's score
  score++;

  // Check if the double score upgrade is enabled
  if (doubleScoreTier > 0) {
    // Add the score bonus from the double score upgrade
    score += doubleScoreBonus;
  }

  // Update the score display
  document.querySelector("#score").innerHTML = "Score: " + score;

  // Increment the number of clicks
  clicks++;

  // Calculate the elapsed time
  let elapsedTime = Date.now() - startTime;

  // Calculate the average CPS
  let cps = clicks / (elapsedTime / 1000);

  // Update the CPS display
  document.querySelector("#cps").innerHTML = "CPS: " + cps.toFixed(2);
}
function doubleScore() {
  // Calculate the cost of the upgrade based on the number of times it has been purchased
  let cost = 50 * Math.pow(2, doubleScoreTier);

  // Check if the player has enough points to purchase the upgrade
  if (score >= cost) {
    // Deduct the cost of the upgrade from the player's score
    score -= cost;

    // Update the score display
    document.querySelector("#score").innerHTML = "Score: " + score;

    // Increment the tier of the upgrade
    doubleScoreTier++;

    // Update the score bonus based on the current tier
    doubleScoreBonus = 2 * doubleScoreTier;

    // Calculate the new cost of the upgrade based on the updated number of times it has been purchased
    let newCost = 50 * Math.pow(2, doubleScoreTier);

    // Update the cost display with the new cost
    document.querySelector("#double-score-cost").innerHTML = "(" + newCost + " points)";
  }
}

function autoClicker() {
  // Calculate the cost of the upgrade based on the number of times it has been purchased
  let cost = 500 * Math.pow(3, autoClickerTier);

  // Check if the player has enough points to purchase the upgrade
  if (score >= cost) {
    // Deduct the cost of the upgrade from the player's score
    score -= cost;

    // Update the score display
    document.querySelector("#score").innerHTML = "Score: " + score;

    // Increment the tier of the upgrade
    autoClickerTier++;

    // Update the score bonus based on the current tier
    autoClickerBonus = 10 + (30 * autoClickerTier);

    // Calculate the new cost of the upgrade based on the updated number of times it has been purchased
    let newCost = 500 * Math.pow(3, autoClickerTier);

    // Update the cost display with the new cost
    document.querySelector("#auto-clicker-cost").innerHTML = "(" + newCost + " points)";

    // Enable the auto-clicker
    autoClickerInterval = setInterval(function() {
      // Add the score bonus from the auto-clicker upgrade
      score += autoClickerBonus;

      // Update the score display
      document.querySelector("#score").innerHTML = "Score: " + score;
    }, 5000);
  }
}
// Add a click event listener to the "Click me!" button
document.querySelector("#cookie").addEventListener("click", function() {
  // Add the score bonus from the auto-clicker upgrade
  score += autoClickerBonus;
  // Update the score display
  document.querySelector("#score").innerHTML = "Score: " + score;
});


document.querySelector("#cookie").addEventListener("click", onCookieClick);
document.querySelector("#double-score").addEventListener("click", doubleScore);
document.querySelector("#auto-clicker").addEventListener("click", autoClicker);

// Add code for triple score and quad score
function tripleScore() {
  // Calculate the cost of the upgrade 
  let cost = 100;

  // Check if the player has enough points to purchase the upgrade
  if (score >= cost) {
    // Deduct the cost of the upgrade from the player's score
    score -= cost;

    // Update the score display
    document.querySelector("#score").innerHTML = "Score: " + score;

    // Update the score bonus 
    score += 3;
  }
}

function quadScore() {
  // Calculate the cost of the upgrade 
  let cost = 200;

  // Check if the player has enough points to purchase the upgrade
  if (score >= cost) {
    // Deduct the cost of the upgrade from the player's score
    score -= cost;

    // Update the score display
    document.querySelector("#score").innerHTML = "Score: " + score;

    // Update the score bonus 
    score += 4;
  }
}

document.querySelector("#triple-score").addEventListener("click", tripleScore);
document.querySelector("#quad-score").addEventListener("click", quadScore);

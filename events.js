// Custom Events on YouTube (OpenJavaScript):
// https://www.youtube.com/watch?v=47n53M3U4WA
//

// 1.a) Define the Basic Event (no additional data):

// const e_gameoverA = new Event("gameoverA");

// 1.b) Define a Custom Event:

const e_gameoverB = new CustomEvent(
  "gameoverB",
  // add an object with additional data:
  {
    // bubbles: true,
    // composed: true,
    // cancelable: true,
    detail: {
      timestamp: Date.now(),
      action: function (playerId, score) {
        console.log("Action occurred: gameoverB");
        localStorage.setItem(`${playerId}_${this.timestamp}`, score);
        console.log(localStorage.getItem(`${playerId}_${this.timestamp}`));
      },
    },
  }
);

// 1.c) Define a function containing a custom event:

function e_gameoverC(playerId, score) {
  const e = new CustomEvent("gameoverC", {
    bubbles: true,
    composed: true,
    cancelable: true,
    detail: {
      timestamp: Date.now(),
    },
  });
  window.dispatchEvent(e);
  if (!e.defaultPrevented) {
    localStorage.setItem(`${playerId}_${e.detail.timestamp}`, score);
    console.log(localStorage.getItem(`${playerId}_${e.detail.timestamp}`));
  }
}

// 2) Fire event and respond to it:

const gameBtn = document.getElementById("gameBtn");
const scoreDisplay = document.getElementById("score");
const notes = document.getElementById("notes");

const playerId = 445;
let score = 0;
let errors = [];

gameBtn.addEventListener("click", updateScore);

function updateScore() {
  score++;
  scoreDisplay.textContent = score;
}

setTimeout(() => {
  // window.dispatchEvent(e_gameover);
  e_gameoverC(playerId, score);
}, 5000);

window.addEventListener("gameoverB", (e) => {
  e.preventDefault();
  try {
    notes.textContent = "B: Time's Up";
    console.log('Game Over B: ', e.detail.timestamp);
    e.detail.action();
  } catch (err) {
    errors.push(err);
  }
});


window.addEventListener("gameoverC", (e) => {
  // e.preventDefault();
  try {
    notes.textContent = "C: Time's Up";
    console.log('Game Over C: ', e.detail.timestamp);
    // e.detail.action();
  } catch (err) {
    errors.push(err);
  }
});

window.addEventListener("gameoverC", () => {
  if (errors.length > 0) {
    throw new Error(errors.map((error) => error.message));
  }
  gameBtn.removeEventListener("click", updateScore);
});

// window.addEventListener('gameoverC', (e) => {
//   // e.detail.action(playerId, score);
//   e_gameoverC(playerId, score);
// });

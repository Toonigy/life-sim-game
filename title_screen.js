// Get references to buttons
const newGameBtn = document.getElementById('new-game-btn');
const loadGameBtn = document.getElementById('load-game-btn');
const settingsBtn = document.getElementById('settings-btn');

// Start a new game
newGameBtn.addEventListener('click', () => {
  alert("Starting a New Game...");
  // Logic to initialize a new game
  window.location.href = "new_game.html"; // Redirect to game page
});

// Load an existing game
loadGameBtn.addEventListener('click', () => {
  const saveFile = localStorage.getItem('lifeSimSave');
  if (saveFile) {
    alert("Loading Game...");
    const saveData = JSON.parse(saveFile);
    console.log("Save Data Loaded:", saveData);
    // Logic to load game data
  } else {
    alert("No saved game found!");
  }
});

// Open settings
settingsBtn.addEventListener('click', () => {
  alert("Opening Settings...");
  // Logic for settings
});

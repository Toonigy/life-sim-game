// Reference form elements
const nameInput = document.getElementById('player-name');
const presetNames = document.getElementById('preset-names');
const genderOptions = document.getElementsByName('gender');
const avatarColor = document.getElementById('avatar-color');
const avatarHair = document.getElementById('avatar-hair');
const avatarForm = document.getElementById('avatar-form');

// Generate a random name if selected
presetNames.addEventListener('change', () => {
  if (presetNames.value === 'random') {
    const randomNames = ['Charlie', 'Morgan', 'Riley', 'Dakota', 'Casey'];
    nameInput.value = randomNames[Math.floor(Math.random() * randomNames.length)];
  } else {
    nameInput.value = presetNames.value;
  }
});

// Handle form submission
avatarForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get selected gender
  let selectedGender = 'male';
  genderOptions.forEach(option => {
    if (option.checked) {
      selectedGender = option.value;
    }
  });

  // Create avatar object
  const avatarData = {
    name: nameInput.value || 'Unnamed',
    gender: selectedGender,
    color: avatarColor.value,
    hair: avatarHair.value,
  };

  // Save avatar data to local storage
  localStorage.setItem('avatarData', JSON.stringify(avatarData));

  // Confirm save and move to the game
  alert('Avatar Created! Starting the game...');
  window.location.href = 'game_start.html'; // Placeholder for the actual game start page
});

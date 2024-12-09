// References to form elements
const nameInput = document.getElementById('player-name');
const presetNames = document.getElementById('preset-names');
const genderOptions = document.getElementsByName('gender');
const avatarColor = document.getElementById('avatar-color');
const avatarHair = document.getElementById('avatar-hair');
const avatarForm = document.getElementById('avatar-form');

// Populate name input when a preset name is chosen
presetNames.addEventListener('change', () => {
  if (presetNames.value === 'random') {
    const randomNames = ['Charlie', 'Morgan', 'Riley', 'Dakota', 'Casey'];
    nameInput.value = randomNames[Math.floor(Math.random() * randomNames.length)];
  } else {
    nameInput.value = presetNames.value;
  }
});

// Validate form inputs
function validateForm() {
  if (!nameInput.value.trim()) {
    alert('Please enter a valid name.');
    return false;
  }

  let genderSelected = false;
  genderOptions.forEach(option => {
    if (option.checked) {
      genderSelected = true;
    }
  });

  if (!genderSelected) {
    alert('Please select a gender.');
    return false;
  }

  return true;
}

// Handle form submission
avatarForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate inputs
  if (!validateForm()) return;

  // Get selected gender
  let selectedGender = 'unspecified';
  genderOptions.forEach(option => {
    if (option.checked) {
      selectedGender = option.value;
    }
  });

  // Create avatar object
  const avatarData = {
    name: nameInput.value.trim(),
    gender: selectedGender,
    color: avatarColor.value,
    hair: avatarHair.value,
  };

  // Save avatar data to local storage
  localStorage.setItem('avatarData', JSON.stringify(avatarData));

  // Redirect to the dashboard
  alert('Avatar Created! Redirecting to your dashboard...');
  window.location.href = 'game_start.html';
});

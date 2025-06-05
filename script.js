// Elements
const morningInput = document.getElementById('morningInput');
const saveMorning = document.getElementById('saveMorning');
const workoutInput = document.getElementById('workoutInput');
const saveWorkout = document.getElementById('saveWorkout');
const quoteEl = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuote');

// Motivation quotes
const quotes = [
  "Discipline is the bridge between goals and accomplishment.",
  "The grind never stops. Fight through it.",
  "One win is enough to change your whole life.",
  "Fall seven times, stand up eight.",
  "Strength grows in the moments when you think you can't go on but you keep going anyway.",
  "Success is built on consistency, not luck."
];

// Load saved data
function loadData() {
  morningInput.value = localStorage.getItem('morningPlan') || '';
  workoutInput.value = localStorage.getItem('workoutLog') || '';
  showRandomQuote();
}

// Save handlers
saveMorning.addEventListener('click', () => {
  localStorage.setItem('morningPlan', morningInput.value.trim());
  alert('Morning plan saved.');
});

saveWorkout.addEventListener('click', () => {
  localStorage.setItem('workoutLog', workoutInput.value.trim());
  alert('Workout log saved.');
});

// Quote cycling
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}

newQuoteBtn.addEventListener('click', showRandomQuote);

// Initialize app
loadData();

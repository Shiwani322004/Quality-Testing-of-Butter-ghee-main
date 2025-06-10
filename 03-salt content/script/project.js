const steps = document.querySelectorAll('.step');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentStep = 0;

function updateSteps() {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
  prevBtn.disabled = currentStep === 0;
  nextBtn.textContent = currentStep === steps.length - 1 ? 'Finish' : 'Next';
}

// Navigation buttons
nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
  }
});

// Initial load
updateSteps();

// Pouring animation controls for Step 2
const startPourBtn = document.getElementById('startPourBtn');
const drop = document.getElementById('drop');

startPourBtn.addEventListener('click', () => {
  // Show the drop animation
  drop.style.opacity = 1;
  drop.style.animationPlayState = 'running';

  // Disable the button while pouring
  startPourBtn.disabled = true;
  startPourBtn.textContent = 'Pouring...';

  // After 5 seconds stop animation and update UI
  setTimeout(() => {
    drop.style.opacity = 0;
    drop.style.animationPlayState = 'paused';
    startPourBtn.textContent = 'Added Ammonia & Ethanol';
  }, 5000);
});

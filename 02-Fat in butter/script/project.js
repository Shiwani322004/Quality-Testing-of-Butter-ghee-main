const dishImg = document.getElementById("dish");
const plate = document.getElementById("plate");
const butterBlock = document.getElementById("butter-block");
const knife = document.getElementById("knife");
const butterSlice = document.getElementById("butter-slice");
const butterSlice1 = document.getElementById("butter-slice-1");
const spatula = document.getElementById("spatula");
const onButton = document.getElementById("power-btn");
const tareButton = document.getElementById("tare-btn");
const screen = document.getElementById("scale-display");
const ovenDoor = document.getElementById("ovendoor-w");
const ovenPower = document.getElementsByClassName("power-btn")[0];
const tempScreen = document.getElementsByClassName("temp-screen")[0];
const timerLight = document.getElementsByClassName("timer")[0];
const timerScreen = document.getElementsByClassName("timer-screen")[0];
const meltedButter = document.getElementById("melted-butter");
const instBox = document.getElementById("instruction-box")
const dLid = document.getElementById("dessicator-lid");

let dishMoved = false;
let knifeMoved = false;
let spatulaMoved = false;

let isDishOnScale = false;
let isOn = false;
let isTare = false;
let actualWeight = 80;

let step = 1;
let stepInProgress = false;

let isOvenON = false;
let timerInterval = null;

let tareCount = 0;

dishImg.addEventListener("click", async () => {
  if (stepInProgress) return;
  stepInProgress = true;

  // Step 1: Move dish onto and off scale
  if (step === 1 && !dishMoved) {

    // await delay(2000);
    dishMoved = true;
    await delay(500);

    dishImg.style.transform = "translate(0vw,-10vh)";
    await delay(1000);
    dishImg.style.transform = "translate(-29.5vw,-10vh)";
    await delay(1000);
    dishImg.style.transform = "translate(-29.5vw,7vh)";
    await delay(1000);

    isDishOnScale = true;
    if (isOn) {
      screen.innerText = isTare ? "0.00" : `${actualWeight}`;
    }

    await delay(3000);

    isDishOnScale = false;
    dishImg.style.transform = "translate(-29.5vw,-10vh)";
    if (isOn) {
      screen.innerText = isTare ? `${-actualWeight}` : "0.00";
    }

    await delay(1000);
    dishImg.style.transform = "translate(0vw,-10vh)";
    await delay(1000);
    dishImg.style.transform = "translate(0vw,14.3vh)";
    if (isOn) {
      screen.innerText = isTare ? `${-actualWeight}` : "0.00";
    }
    stepInstruction(step);

    step = 2;
  }

  // Step 4: Move butter slice to dish
  else if (step === 4) {
    dishImg.style.transform = "translate(0vw,-15vh)";
    butterSlice.style.transform = "translate(8.8vw,-30vh) rotate(0deg)";
    await delay(1000);
    dishImg.style.transform = "translate(-29.5vw,-15vh)";
    butterSlice.style.transform = "translate(-20.8vw,-30vh) rotate(0deg)";
    await delay(1000);
    dishImg.style.transform = "translate(-29.5vw,7vh)";
    butterSlice.style.transform = "translate(-20.8vw,-8.7vh) rotate(0deg)";
    stepInstruction(step);

    step = 5;
  }

  // Step 6: Move dish with slice into oven
  else if (step === 6) {
    dishImg.style.transform = "translate(-29.5vw, -15vh)";
    butterSlice.style.transform = "translate(-20.8vw, -30vh) rotate(0deg)";
    await delay(1000);
    dishImg.style.transform = "translate(46.5vw, -15vh)";
    butterSlice.style.transform = "translate(55vw, -30vh) rotate(0deg)";
    await delay(1000);
    dishImg.style.transform = "translate(46.5vw, -4.6vh)";
    butterSlice.style.transform = "translate(55vw, -20vh) rotate(0deg)";
    await delay(400);
    dishImg.style.transform = "translate(46.5vw, -5.4vh)";
    butterSlice.style.transform = "translate(55vw, -21vh) rotate(0deg)";
    stepInstruction(step);

    
    step = 7;
  }

  stepInProgress = false;
});

knife.addEventListener("click", async () => {
  if (knifeMoved || step !== 2 || stepInProgress) return;
  stepInProgress = true;

  knifeMoved = true;
  await delay(1000);

  knife.style.transform = "translate(0vw, 13vh)";
  await delay(500);
  knife.style.transform = "translate(0vw, 13vh) rotate(-50deg)";
  await delay(200);
  butterBlock.style.width = "7vw";
  butterBlock.style.left = "23vw";
  await delay(500);
  butterSlice.style.width = "2vw";
  butterSlice.style.height = "8vh";
  knife.style.transform = "translate(0vw, 0vh) rotate(0deg)";
  stepInstruction(step);
  step = 3;
  stepInProgress = false;
});

spatula.addEventListener("click", async () => {
  if (spatulaMoved || step !== 3 || stepInProgress) return;
  stepInProgress = true;

  spatulaMoved = true;
  await delay(1000);

  spatula.style.transform = "translate(0vw, -13vh) rotate(-15deg)";
  await delay(1000);
  spatula.style.transform = "translate(26vw, -13vh) rotate(-25deg)";
  await delay(1000);
  spatula.style.transform = "translate(26vw, 11vh) rotate(-30deg)";
  await delay(1000);
  spatula.style.transform = "translate(26vw,-6vh) rotate(0deg)";
  butterSlice.style.transform = "translate(-0.5vw,-23.2vh) rotate(0deg)";
  butterSlice.style.height = "4vh";
  butterSlice1.style.height = "4vh";
  butterSlice1.style.width = "2vw";
  await delay(1000);
  spatula.style.transform = "translate(34.5vw,-6vh) rotate(0deg)";
  butterSlice.style.transform = "translate(8vw,-23.2vh) rotate(0deg)";
  await delay(1000);
  spatula.style.transform = "translate(34.5vw,8vh) rotate(-25deg)";
  butterSlice.style.transform = "translate(8vw,-1vh) rotate(-25deg)";
  await delay(1000);
  spatula.style.transform = "translate(34.5vw,-10vh) rotate(0deg)";
  await delay(1000);
  spatula.style.transform = "translate(0vw,-10vh)";
  butterSlice.style.transform = "translate(8.8vw,-1vh) rotate(0deg)";
  await delay(1000);
  spatula.style.transform = "translate(0vw,0vh)";
  await delay(1000);
  butterSlice.style.transform = "translate(8.8vw,-1vh) rotate(0deg)";
  await delay(1000);
  stepInstruction(step);
  step = 4;
  stepInProgress = false;
});

ovenDoor.addEventListener("click", () => {
  if (step === 5 && !ovenDoor.classList.contains("open")) {
    stepInstruction(step);
    ovenDoor.classList.add("open");
    step = 6;
  } else if (step === 7 && ovenDoor.classList.contains("open") && !isOvenON) {
    stepInstruction(step);
    ovenDoor.classList.remove("open");
    step = 8;
  }
});
// Handle oven door
ovenDoor.addEventListener("click", () => {
  if (step === 9 && !ovenDoor.classList.contains("open") && !isOvenON) {
    stepInstruction(step);
    ovenDoor.classList.add("open");
    step = 10;

  } else if (step === 11 && ovenDoor.classList.contains("open")) {
    stepInstruction(step);
    ovenDoor.classList.remove("open");
    step = 11; // stays at 11 until dLid click transitions to 12
  }
});

// Handle desiccator lid with single clean listener
dLid.addEventListener('click', async () => {
  if (step === 11) {
    // Open the desiccator lid
    dLid.style.transform = "translate(0vw, -22vh)";
    await delay(1000);
    dLid.style.transform = "translate(10.4vw, -22vh)";
    await delay(1000);
    dLid.style.transform = "translate(10.4vw, -20vh)";
    stepInstruction(step);
    step = 12;

  } else if (step === 12) {
    // Close the desiccator lid
    dLid.style.transform = "translate(10.4vw, -22vh)";
    await delay(1000);
    dLid.style.transform = "translate(-5vw, -22vh)";
    await delay(1000);
    dLid.style.transform = "translate(-5vw, -10vh)";
    await delay(1000);
    dishImg.style.transform="translate(32.5vw,-18vh)";

    await delay(1000);
    dishImg.style.transform="translate(-28.5vw,-18vh)";
    await delay(1000);
    dishImg.style.transform="translate(-28.5vw,7.5vh)"
    stepInstruction(step);



    step = 13;
  }
});



dishImg.addEventListener('click', async () => {
  if (step === 10) {
    // Move the dish
    dishImg.src ="../Images/butter-completely-melted.png";

    // Hide the slice
    butterSlice.style.display = "none";



    dishImg.style.transform = "translate(46.5vw, -20.4vh)";
    await delay(1000);
    dishImg.style.transform = "translate(32.5vw, -20.4vh)";

    await delay(1000);
    dishImg.style.transform = "translate(32.5vw, 5vh)";
    stepInstruction(step);


    step = 11;


    

    // Show melted butter
    
  }
});



ovenPower.addEventListener('click', () => {
  if (step === 8) {
    // If oven is already ON and timer is running, prevent turning off
    if (isOvenON && timerInterval) return;

    isOvenON = !isOvenON;
    ovenPower.classList.toggle("on", isOvenON);

    if (isOvenON) {
      tempScreen.innerText = "180°C";
      timerLight.classList.add("on");
      startCountdown(180); // 3 minutes = 180 seconds
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      tempScreen.innerText = "";
      timerScreen.innerText = "";
      timerLight.classList.remove("on");
    }
    stepInstruction(step);

    step = 9;
  }
});

function startCountdown(durationInSeconds) {
  let time = durationInSeconds;
  clearInterval(timerInterval);
  butterSlice.classList.add("melting");

  timerInterval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerScreen.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (time === 0) {
      clearInterval(timerInterval);
      isOvenON = false;
      ovenPower.classList.remove("on");
      tempScreen.innerText = "";
      timerScreen.innerText = "";
      timerLight.classList.remove("on");
    }

    time--;
  }, 1000);
}

onButton.addEventListener("click", () => {
  isOn = !isOn;

  if (isOn) {
    screen.innerText = isDishOnScale
      ? isTare
        ? "00.00"
        : `${actualWeight}`
      : isTare
      ? `${-actualWeight}`
      : "00.00";
  } else {
    screen.innerText = "OFF";
  }
});

tareButton.addEventListener("click", () => {
  if (!isOn) return;

  tareCount++;

  if (tareCount === 1 && isDishOnScale) {
    isTare = true;
    screen.innerText = "00.00";
  } else if (tareCount === 2 && !isDishOnScale) {
    isTare = false;
    screen.innerText = "00.00";
    tareCount = 0;
  }
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


function stepInstruction(step) {
  switch (step) {
    case 1:
      instBox.innerText = "Click on the knife to cut the butter block.";
      break;
    case 2:
      instBox.innerText = "Click on the spatula to lift a small slice of butter and place it on the dish.";
      break;
    case 3:
      instBox.innerText = "Click on the dish to place the butter slice on the weighing balance and note down the weight.";
      break;
    case 4:
      instBox.innerText = "Click on the oven door to open it.";
      break;
    case 5:
      instBox.innerText = "Click on the dish to place it inside the oven.";
      break;
    case 6:
      instBox.innerText = "Click on the oven door to close it.";
      break;
    case 7:
      instBox.innerText = "Turn on the oven by clicking the power button.";
      break;
    case 8:
      instBox.innerText = "Wait for the heating to complete. Then click the oven door to open it.";
      break;
    case 9:
      instBox.innerText = "Click on the dish to take it out of the oven and place it inside the dessicator.";
      break;
    case 10:
      instBox.innerText = "Click on the dessciator lid to close it.";
      break;
    case 11:
      instBox.innerText = "Click on the desiccator lid to open it.";
      break;
    case 12:
      instBox.innerText = ""
      break;
    case 13:
      instBox.innerText = "Experiment completed successfully!";
      break;
    default:
      instBox.innerText = "Experiment ended.";
  }
}

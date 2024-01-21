import { Enigma } from "./enigma.mjs";

const enigmaMachine = new Enigma();
// Get the select element
var rotorIPos = document.getElementById("RotarIPos");
var rotorINotch = document.getElementById("RotarINotch");

var rotorIIPos = document.getElementById("RotarIIPos");
var rotorIINotch = document.getElementById("RotarIINotch");

var rotorIIIPos = document.getElementById("RotarIIIPos");
var rotorIIINotch = document.getElementById("RotarIIINotch");

document.addEventListener("DOMContentLoaded", function () {
  // Loop to create options from 0 to 25
  for (var i = 0; i <= 25; i++) {
    // Create an option element
    var rotorIPosOption = document.createElement("option");

    // Set the value and text content of the option
    rotorIPosOption.value = i;
    rotorIPosOption.textContent = i;

    // Append the option to the select element
    rotorIPos.appendChild(rotorIPosOption);
    rotorIPos.value = enigmaMachine.rotorI.getPosition();
  }
  for (var i = 0; i <= 25; i++) {
    // Create an option element
    var rotorINotchOption = document.createElement("option");

    // Set the value and text content of the option
    rotorINotchOption.value = i;
    rotorINotchOption.textContent = i;

    // Append the option to the select element
    rotorINotch.appendChild(rotorINotchOption);
    rotorINotch.value = enigmaMachine.rotorI.getNotch();
  }

  // Loop to create options from 0 to 25
  for (var i = 0; i <= 25; i++) {
    // Create an option element
    var rotorIIPosOption = document.createElement("option");

    // Set the value and text content of the option
    rotorIIPosOption.value = i;
    rotorIIPosOption.textContent = i;

    // Append the option to the select element
    rotorIIPos.appendChild(rotorIIPosOption);
    rotorIIPos.value = enigmaMachine.rotorII.getPosition();
  }
  for (var i = 0; i <= 25; i++) {
    // Create an option element
    var rotorIINotchOption = document.createElement("option");

    // Set the value and text content of the option
    rotorIINotchOption.value = i;
    rotorIINotchOption.textContent = i;

    // Append the option to the select element
    rotorIINotch.appendChild(rotorIINotchOption);
    rotorIINotch.value = enigmaMachine.rotorII.getNotch();
  }

  // Loop to create options from 0 to 25
  for (var i = 0; i <= 25; i++) {
    // Create an option element
    var rotorIIIPosOption = document.createElement("option");

    // Set the value and text content of the option
    rotorIIIPosOption.value = i;
    rotorIIIPosOption.textContent = i;

    // Append the option to the select element
    rotorIIIPos.appendChild(rotorIIIPosOption);
    rotorIIIPos.value = enigmaMachine.rotorIII.getPosition();
  }
  for (var i = 0; i <= 25; i++) {
    // Create an option element
    var rotorIIINotchOption = document.createElement("option");

    // Set the value and text content of the option
    rotorIIINotchOption.value = i;
    rotorIIINotchOption.textContent = i;

    // Append the option to the select element
    rotorIIINotch.appendChild(rotorIIINotchOption);
    rotorIIINotch.value = enigmaMachine.rotorIII.getNotch();
  }
});

var btn = document.querySelector("#submit");
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var outputText = "";

btn.addEventListener("click", (event) => {
  output.innerHTML = "";
  outputText = "";
  var withoutSpaces = input.value.replace(/\s+/g, "");
  withoutSpaces = withoutSpaces.toUpperCase();
  for (let i = 0; i < withoutSpaces.length; i++) {
    const currentLetter = withoutSpaces[i];
    outputText += enigmaMachine.encryptLetter(currentLetter);
  }
  output.innerHTML = outputText;
  setAllSettings();
});

rotorIPos.addEventListener("change", (event) => {
  enigmaMachine.rotorI.setPosition(Number(rotorIPos.value));
  console.log(enigmaMachine.rotorI.getPosition());
});

rotorINotch.addEventListener("change", (event) => {
  enigmaMachine.rotorI.setNotch(Number(rotorINotch.value));
});

rotorIIPos.addEventListener("change", (event) => {
  enigmaMachine.rotorII.setPosition(Number(rotorIIPos.value));
});

rotorIINotch.addEventListener("change", (event) => {
  enigmaMachine.rotorII.setNotch(Number(rotorIINotch.value));
});

rotorIIIPos.addEventListener("change", (event) => {
  enigmaMachine.rotorIII.setPosition(Number(rotorIIIPos.value));
});

rotorIIINotch.addEventListener("change", (event) => {
  enigmaMachine.rotorIII.setNotch(Number(rotorIIINotch.value));
});

function setAllSettings() {
  rotorIPos.value = enigmaMachine.rotorI.getPosition();
  rotorINotch.value = enigmaMachine.rotorI.getNotch();

  rotorIIPos.value = enigmaMachine.rotorII.getPosition();
  rotorIINotch.value = enigmaMachine.rotorII.getNotch();

  rotorIIIPos.value = enigmaMachine.rotorIII.getPosition();
  rotorIIINotch.value = enigmaMachine.rotorIII.getNotch();
}

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
  enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[0]].setPosition(Number(rotorIPos.value));
  console.log(enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[0]].getPosition());
});

rotorINotch.addEventListener("change", (event) => {
  enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[0]].setNotch(Number(rotorINotch.value));
});

rotorIIPos.addEventListener("change", (event) => {
  enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[1]].setPosition(Number(rotorIIPos.value));
});

rotorIINotch.addEventListener("change", (event) => {
  enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[1]].setNotch(Number(rotorIINotch.value));
});

rotorIIIPos.addEventListener("change", (event) => {
  enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[2]].setPosition(Number(rotorIIIPos.value));
});

rotorIIINotch.addEventListener("change", (event) => {
  enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[2]].setNotch(Number(rotorIIINotch.value));
});

//CHANGE THISSS==================================
function setAllSettings() {
  rotorIPos.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[0]].getPosition();
  rotorINotch.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[0]].getNotch();

  rotorIIPos.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[1]].getPosition();
  rotorIINotch.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[1]].getNotch();

  rotorIIIPos.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[2]].getPosition();
  rotorIIINotch.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[2]].getNotch();
}

//SET ROTAR OPTIONS
var rotarI = document.getElementById("RotarI");
var rotarII = document.getElementById("RotarII");
var rotarIII = document.getElementById("RotarIII");

function init() {
  rotarI.value = enigmaMachine.getSelectedRotars()[0];
  rotarII.value = enigmaMachine.getSelectedRotars()[1];
  rotarIII.value = enigmaMachine.getSelectedRotars()[2];
}
init();

rotarI.addEventListener("change", () => {
  enigmaMachine.setSelectedRotars(0, Number(rotarI.value));
  rotorIPos.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[0]].getPosition();
  rotorINotch.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[0]].getNotch();
});
rotarII.addEventListener("change", () => {
  enigmaMachine.setSelectedRotars(1, Number(rotarII.value));
  rotorIIPos.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[1]].getPosition();
  rotorIINotch.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[1]].getNotch();
});
rotarIII.addEventListener("change", () => {
  enigmaMachine.setSelectedRotars(2, Number(rotarIII.value));
  rotorIIIPos.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[2]].getPosition();
  rotorIIINotch.value = enigmaMachine.getRotars()[enigmaMachine.getSelectedRotars()[2]].getNotch();
});

import { Enigma } from "./enigma.mjs";

const enigmaMachine = new Enigma();
//Get all HTML elements
var rotorIPos = document.getElementById("RotorIPos");
var rotorINotch = document.getElementById("RotorINotch");

var rotorIIPos = document.getElementById("RotorIIPos");
var rotorIINotch = document.getElementById("RotorIINotch");

var rotorIIIPos = document.getElementById("RotorIIIPos");
var rotorIIINotch = document.getElementById("RotorIIINotch");

document.addEventListener("DOMContentLoaded", function () {
  // Loop to create options from 0 to 25
  for (var i = 0; i <= 25; i++) {
    var rotorIPosOption = document.createElement("option");
    rotorIPosOption.value = i;
    rotorIPosOption.textContent = i;

    // Append the option to the select element
    rotorIPos.appendChild(rotorIPosOption);
    rotorIPos.value = enigmaMachine.rotorI.getPosition();
  }
  for (var i = 0; i <= 25; i++) {
    var rotorINotchOption = document.createElement("option");
    rotorINotchOption.value = i;
    rotorINotchOption.textContent = i;

    // Append the option to the select element
    rotorINotch.appendChild(rotorINotchOption);
    rotorINotch.value = enigmaMachine.rotorI.getNotch();
  }

  for (var i = 0; i <= 25; i++) {
    var rotorIIPosOption = document.createElement("option");
    rotorIIPosOption.value = i;
    rotorIIPosOption.textContent = i;

    // Append the option to the select element
    rotorIIPos.appendChild(rotorIIPosOption);
    rotorIIPos.value = enigmaMachine.rotorII.getPosition();
  }
  for (var i = 0; i <= 25; i++) {
    var rotorIINotchOption = document.createElement("option");

    rotorIINotchOption.value = i;
    rotorIINotchOption.textContent = i;

    // Append the option to the select element
    rotorIINotch.appendChild(rotorIINotchOption);
    rotorIINotch.value = enigmaMachine.rotorII.getNotch();
  }

  for (var i = 0; i <= 25; i++) {
    var rotorIIIPosOption = document.createElement("option");

    rotorIIIPosOption.value = i;
    rotorIIIPosOption.textContent = i;

    // Append the option to the select element
    rotorIIIPos.appendChild(rotorIIIPosOption);
    rotorIIIPos.value = enigmaMachine.rotorIII.getPosition();
  }
  for (var i = 0; i <= 25; i++) {
    var rotorIIINotchOption = document.createElement("option");

    rotorIIINotchOption.value = i;
    rotorIIINotchOption.textContent = i;

    // Append the option to the select element
    rotorIIINotch.appendChild(rotorIIINotchOption);
    rotorIIINotch.value = enigmaMachine.rotorIII.getNotch();
  }
});

var Encrypt = document.querySelector("#Encrypt");
var Decrypt = document.querySelector("#Decrypt");

var input = document.querySelector("#input");
var output = document.querySelector("#output");
var outputText = "";

//encypt the input
Encrypt.addEventListener("click", () => {
  EncryptDecrypt();
});
Decrypt.addEventListener("click", () => {
  EncryptDecrypt();
});
//updating the UI and backend on settings change
rotorIPos.addEventListener("change", (event) => {
  enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[0]].setPosition(Number(rotorIPos.value));
  console.log(enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[0]].getPosition());
});

rotorINotch.addEventListener("change", (event) => {
  enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[0]].setNotch(Number(rotorINotch.value));
});

rotorIIPos.addEventListener("change", (event) => {
  enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[1]].setPosition(Number(rotorIIPos.value));
});

rotorIINotch.addEventListener("change", (event) => {
  enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[1]].setNotch(Number(rotorIINotch.value));
});

rotorIIIPos.addEventListener("change", (event) => {
  enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[2]].setPosition(Number(rotorIIIPos.value));
});

rotorIIINotch.addEventListener("change", (event) => {
  enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[2]].setNotch(Number(rotorIIINotch.value));
});

//updating all UI settings
function setAllSettings() {
  rotorIPos.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[0]].getPosition();
  rotorINotch.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[0]].getNotch();

  rotorIIPos.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[1]].getPosition();
  rotorIINotch.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[1]].getNotch();

  rotorIIIPos.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[2]].getPosition();
  rotorIIINotch.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[2]].getNotch();
}
function EncryptDecrypt() {
  output.innerHTML = "";
  outputText = "";
  //getting rid of spaces and making the input uppercase
  var withoutSpaces = input.value.replace(/\s+/g, "");
  withoutSpaces = withoutSpaces.toUpperCase();
  for (let i = 0; i < withoutSpaces.length; i++) {
    const currentLetter = withoutSpaces[i];
    outputText += enigmaMachine.encryptLetter(currentLetter);
  }
  for (let i = 0; i < outputText.length; i += 30) {
    outputText = outputText.substring(0, i) + " " + outputText.substring(i);
  }
  output.innerHTML = outputText;
  setAllSettings();
}
//SET ROTOR OPTIONS
var rotorI = document.getElementById("rotorI");
var rotorII = document.getElementById("rotorII");
var rotorIII = document.getElementById("rotorIII");
//SET REFLECTOR OPTIONS
var reflector = document.getElementById("reflector");

function init() {
  rotorI.value = enigmaMachine.getSelectedRotors()[0];
  rotorII.value = enigmaMachine.getSelectedRotors()[1];
  rotorIII.value = enigmaMachine.getSelectedRotors()[2];
  reflector.value = enigmaMachine.getSelectedReflector();
}
init();
//updating rotors on change
rotorI.addEventListener("change", () => {
  enigmaMachine.setSelectedRotors(0, Number(rotorI.value));
  rotorIPos.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[0]].getPosition();
  rotorINotch.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[0]].getNotch();
});
rotorII.addEventListener("change", () => {
  enigmaMachine.setSelectedRotors(1, Number(rotorII.value));
  rotorIIPos.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[1]].getPosition();
  rotorIINotch.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[1]].getNotch();
});
rotorIII.addEventListener("change", () => {
  enigmaMachine.setSelectedRotors(2, Number(rotorIII.value));
  rotorIIIPos.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[2]].getPosition();
  rotorIIINotch.value = enigmaMachine.getRotors()[enigmaMachine.getSelectedRotors()[2]].getNotch();
});

//PLUG SETTINGS
var currentPlugs = document.getElementById("CurentPlugs");
enigmaMachine.getPlugboard().plug("A", "M");
enigmaMachine.getPlugboard().plug("V", "T");
enigmaMachine.getPlugboard().plug("P", "L");

function DisplayPlugs() {
  currentPlugs.innerHTML = "";
  setTimeout(() => {
    const plugs = enigmaMachine.getPlugboard().getPlugs();
    // display the plugs
    for (const [letter1, letter2] of Object.entries(plugs)) {
      const plugElement = document.createElement("div");
      plugElement.textContent = `${letter1} - ${letter2}`;
      currentPlugs.appendChild(plugElement);
      const unplugButton = document.createElement("button");
      unplugButton.textContent = "Unplug";
      unplugButton.addEventListener(
        "click",
        ((l1, l2) => {
          return () => {
            //uplug the letter
            enigmaMachine.getPlugboard().unplug(l1, l2);
            DisplayPlugs();
            console.log(enigmaMachine.getPlugboard().getPlugs());
          };
        })(letter1, letter2)
      );
      currentPlugs.appendChild(unplugButton);
    }
  }, 1);
}
DisplayPlugs();

const addPlugButton = document.getElementById("addPlug");

//add a plug
addPlugButton.addEventListener("click", () => {
  var letter1 = document.getElementById("plug1").value;
  var letter2 = document.getElementById("plug2").value;
  letter1 = letter1.toUpperCase();
  letter2 = letter2.toUpperCase();
  if (letter1 == letter2) {
    alert("Cannot plug a letter to itself");
    return;
  }
  if (enigmaMachine.getPlugboard().isPlugged(letter1) || enigmaMachine.getPlugboard().isPlugged(letter2)) {
    alert("Cannot plug a letter that is already plugged");
    return;
  }
  enigmaMachine.getPlugboard().plug(letter1[0], letter2[0]);
  DisplayPlugs();
});

//SET REFLECTOR
reflector.addEventListener("change", () => {
  enigmaMachine.setSelectedRotors(reflector.value);
});

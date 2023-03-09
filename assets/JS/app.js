/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}
// let el_down = document.getElementById("password__result");

// /* Function to generate combination of password */
// function generate_pass() {
//   let pass = "";
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   for (let i = 1; i <= 10; i++) {
//     let char = Math.floor(Math.random() * str.length + 1);

//     pass += str.charAt(char);
//   }

//   return pass;
// }

// function new_pass() {
//   el_down.innerHTML = generate_pass();
// }

//
document.getElementById("length").addEventListener("change", charLength);

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-=",
};
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  },
];

function new_pass() {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  if (upper + lower + number + symbol === 0) {
    return;
  }
  const passwordBox = document.getElementById("password__result");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerHTML = password;
}

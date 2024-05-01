// let res = 0;
// let displayStr = "";

// document.querySelector("#clear").addEventListener("click", clear);
// let displayVal = document.querySelector("#value");

// document.querySelectorAll(".buttons button").forEach((btn) => {
//   btn.addEventListener("click", check);
// });

// function updateDisplay(newStr) {
//   displayStr += newStr;
//   displayVal.innerHTML = displayStr;
// }

// function clear() {
//   displayStr = "";
//   displayVal.innerHTML = "";
// }

// function add() {}

// function check(val) {
//   let currVal = val.target.innerHTML;
//   updateDisplay(currVal);
//   if (val.target.id !== "") {
//     // math symbol
//     if (currVal === "C") {
//       clear();
//     } else if (currVal === "(") {
//     } else if (currVal === ")") {
//     } else if (currVal === "/") {
//     } else if (currVal === "X") {
//     } else if (currVal === "-") {
//     } else if (currVal === "+") {
//     } else if (currVal === "%") {
//     } else if (currVal === "=") {
//     } else if (currVal === ".") {
//     }
//   } else {
//     // number
//     let currNum = Number(currVal);
//     console.log(currNum);
//   }
// }

let currVal = document.querySelector("#value");

document.querySelector("#clear-btn").addEventListener("click", clear);
document.querySelector("#del-btn").addEventListener("click", cancel);

let displayVal = "";
let outputVal = undefined;

function clear() {
  currVal.innerHTML = "";
}

function cancel() {
  currVal.innerHTML = currVal.innerHTML.toString().slice(0, -1);
}

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let result = document.getElementById("result");

console.log("input1", input1);
console.log("input2", input2);

function add() {
  let num1 = parseFloat(input1.value);
  let num2 = parseFloat(input2.value);
  result.textContent = "Result: " + (num1 + num2);
}
function sub() {
  let num1 = parseFloat(input1.value);
  let num2 = parseFloat(input2.value);
  result.textContent = "Result: " + (num1 - num2);
}
function multiply() {
  let num1 = parseFloat(input1.value);
  let num2 = parseFloat(input2.value);
  result.textContent = "Result: " + (num1 * num2);
}
function divide() {
  let num1 = parseFloat(input1.value);
  let num2 = parseFloat(input2.value);
  if (num2 === 0) {
    result.textContent = "Result: ❌ Cannot divide by 0";
  } else {
    result.textContent = "Result: " + (num1 / num2);
  }
}
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", sub);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

input1.value = 0;
function count(){
    input1.value++;
}

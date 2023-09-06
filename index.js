const screen = document.querySelector(".inOutScreen");
let buttons = document.querySelector(".calcButtons");

let calcBuffer = "0";
let total = 0;
let prevOperator;

function buttonClick(buttonVal) {
  if (isNaN(buttonVal)) {symbolHandler(buttonVal)}
  else {numHandler(buttonVal)} 

  screen.innerText = calcBuffer;
}

function symbolHandler(symbolVal) {
  switch(symbolVal) {
    case "C":
      calcBuffer = "0";
      total = 0;
      break;
    case "=":
      if (prevOperator === null) { return; }
      flushOperation(parseInt(calcBuffer));
      prevOperator = null;
      calcBuffer = total;
      break;
    case "←":
    case "÷":
      handleMath(symbolVal);
      break;
    case "×":
      handleMath(symbolVal);
      break;
    case "−":
      handleMath(symbolVal);
      break;
    case "+":
      handleMath(symbolVal);
      break;
  }
}

function handleMath(symbolVal) {
  if (calcBuffer === "0") { return; }
  const intBuffer = parseInt(calcBuffer);

  if (total === 0) { total = intBuffer; }
  else { flushOperation(intBuffer); }
  
  prevOperator = symbolVal;
  calcBuffer = "0";
}

function flushOperation(intBuffer) {
  if (prevOperator === '+') { total += intBuffer; }
  else if (prevOperator === '−') { total -= intBuffer; }
  else if (prevOperator === '×') { total *= intBuffer; }
  else if (prevOperator === '÷') { total /= intBuffer; }
}

function numHandler(number) {
  if (calcBuffer === "0") { calcBuffer = number; }
  else { calcBuffer += number; }

}

function init() {
  buttons.addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
  });
}

init();

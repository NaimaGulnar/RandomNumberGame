let heading = document.querySelector(".heading");
let input = document.querySelector("#input");
let result = document.querySelector(".result");
let check = document.querySelector(".btn");
let playAgain = document.querySelector(".btn2");

var randomNum = Math.floor(Math.random() * 100) + 1;
var times = 0;

check.addEventListener("click", () => {
  console.log(randomNum);
  times++;
  const num = Number(input.value);
  console.log(num);
  result.classList.remove("hidden");
  if (num > 100 || num < 1) {
    result.innerText = `Please enter the number in the range of 1 - 100`;
  } else if (num > randomNum) {
    result.innerText = `"Actual number is less than ${num}.\nPlease input a lower number!"`;
  } else if (num < randomNum) {
    result.innerText = `"Actual number is greater than ${num}.\nPlease input a higher number!"`;
  } else {
    result.innerText = `"The Actual number was ${randomNum}."\n\n"CONGRATULATIONS!!\nYou guessed the actual number in ${times} times."`;
    playAgain.classList.remove("hidden");
    check.classList.add("hidden");
    input.classList.add("hidden");
    heading.classList.add("hidden");
  }
});
playAgain.addEventListener("click", function () {
  playAgain.classList.add("hidden");
  result.classList.add("hidden");
  check.classList.remove("hidden");
  input.classList.remove("hidden");
  heading.classList.remove("hidden");
  input.value = "";
  times = 0;
  randomNum = Math.floor(Math.random() * 100) + 1;
});

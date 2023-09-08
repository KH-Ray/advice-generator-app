const adviceNumber = document.querySelector(".number");
const adviceText = document.querySelector(".advice-text");
const adviceBtn = document.querySelector(".advice-btn");

let res, data;
let id, advice;

const getRandomNumber = function () {
  return Math.floor(Math.random() * 224) + 1;
};

const getAdvice = async function () {
  try {
    res = await fetch(`https://api.adviceslip.com/advice/${getRandomNumber()}`);
    data = await res.json();

    if (!data) throw new Error("Something went wrong when fetching API");

    id = await data.slip.id;
    advice = await data.slip.advice;
  } catch (error) {
    console.error(error);
  }

  adviceNumber.innerText = id;
  adviceText.innerText = `" ${advice} "`;
};

const renderAdvice = function () {
  getRandomNumber();
  getAdvice();
};

adviceBtn.addEventListener("click", function () {
  renderAdvice();
});

window.addEventListener("load", function () {
  renderAdvice();
});

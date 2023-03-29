// ------------------- //
// XMLHttpRequest      //
// ------------------- //

// const slipId = document.getElementById("slip-id");
// const slipAdvice = document.getElementById("slip-advice");
// const adviceBtn = document.getElementById("advice-btn");

// function getData() {
//   const request = new XMLHttpRequest();
//   request.open("GET", "https://api.adviceslip.com/advice");
//   request.send();
//   request.onload = () => {
//     if (request.status === 200) {
//       let data = JSON.parse(request.response);

//       slipId.textContent = data.slip.id;
//       slipAdvice.textContent = data.slip.advice;
//     } else {
//       console.log(`error ${request.status}`);
//     }
//   };
// }

// adviceBtn.addEventListener("click", function () {
//   getData();
// });

// ------------------- //
// Fetch API           //
// ------------------- //

const slipId = document.getElementById("slip-id");
const slipAdvice = document.getElementById("slip-advice");
const adviceBtn = document.getElementById("advice-btn");

function getData() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let data = json.slip;

      slipId.textContent = data.id;
      slipAdvice.textContent = data.advice;
    });
}

adviceBtn.addEventListener("click", function () {
  getData();
});

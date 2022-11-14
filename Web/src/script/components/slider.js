let rangeInput = document.querySelector(".range-input input");
let rangeInput2 = document.querySelector(".range-input2 input");
let rangeInput3 = document.querySelector(".range-input3 input");

let rangeValue = document.querySelector(".range-input .value div");
let rangeValue2 = document.querySelector(".range-input2 .value2 div");
let rangeValue3 = document.querySelector(".range-input3 .value3 div");

let start = parseFloat(rangeInput.min);
let end = parseFloat(rangeInput.max);
let step = parseFloat(rangeInput.step);

let start2 = parseFloat(rangeInput2.min);
let end2 = parseFloat(rangeInput2.max);
let step2 = parseFloat(rangeInput2.step);

let start3 = parseFloat(rangeInput2.min);
let end3 = parseFloat(rangeInput2.max);
let step3 = parseFloat(rangeInput2.step);
for (let i = start; i <= end; i += step) {
  rangeValue.innerHTML += "<div>" + i + "</div>";
}

for (let i = start2; i <= end2; i += step2) {
  rangeValue2.innerHTML += "<div>" + i + "</div>";
}

for (let i = start3; i <= end3; i += step3) {
  rangeValue3.innerHTML += "<div>" + i + "</div>";
}

rangeInput.addEventListener("input", function () {
  let top = (parseFloat(rangeInput.value) / step) * -40;
  rangeValue.style.marginTop = top + "px";
});

rangeInput2.addEventListener("input", function () {
  let top2 = (parseFloat(rangeInput2.value) / step) * -40;
  rangeValue2.style.marginTop = top2 + "px";
});

rangeInput3.addEventListener("input", function () {
  let top3 = (parseFloat(rangeInput3.value) / step) * -40;
  rangeValue3.style.marginTop = top3 + "px";
});

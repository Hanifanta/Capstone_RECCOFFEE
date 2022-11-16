import $ from "jquery";

const min = 0;
const max = 10;
const step = 0.1;

for (let i = 1; i <= 5; i++) {
  const rangeinput = $(`.range-input${i}`)[0].style;
  const rangeinputvalue = $(`.range-input${i} .value${i}`)[0].style;
  const textafterRange = $(`.range-input${i} .value${i} div`)[0];
  const inputContainer = $(`.range-input${i} input`);

  for (let i = min; i <= max; i += step) {
    textafterRange.innerHTML += `<div> ${i.toFixed(1)} </div>`;
  }

  inputContainer.on("input", function () {
    let top = (this.value / step) * -40;
    textafterRange.style.marginTop = top + "px";
  });

  //styleloop
  rangeinput.display = "flex";
  rangeinput.width = "max-content";
  rangeinput.alignItems = "center";
  rangeinput.borderRadius = "10px";

  rangeinputvalue.color = "$2f2f2f";
  rangeinputvalue.textAlign = "center";
  rangeinputvalue.fontWeight = "600";
  rangeinputvalue.lineHeight = "40px";
  rangeinputvalue.height = "40px";
  rangeinputvalue.overflow = "hidden";
  rangeinputvalue.marginLeft = "10px";

  textafterRange.style.transition = "all 300ms ease-in-out";

  inputContainer[0].style.boxShadow = "inset 0 0 3px 0.2px rgb(0, 0, 0, 0.5)";
  inputContainer[0].style.appearance = "none";
  inputContainer[0].style.width = "var(--widthsliding)";
  inputContainer[0].style.height = "15px";
  inputContainer[0].style.borderRadius = "30px";
  inputContainer[0].style.background = "#eddfb3";
  inputContainer[0].style.border = "none";
  inputContainer[0].style.outline = "none";
}

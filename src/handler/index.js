require("./shape.hanler");
require("./table.handler");

const { MultiRangeSlider, initTE } = require("tw-elements");

initTE({ MultiRangeSlider });

const startValue = document.querySelector("#multi-range-start-values");
const startValueValues = document.querySelector(
  "#multi-range-start-values-show"
);

startValue.addEventListener("valueChanged.te.multiRangeSlider", (e) => {
  startValueValues.innerHTML = `
    Value:
    <span class="flex flex-col">
      <div>First: ${e.values.rounded[0]}</div>
      <div>Second  ${e.values.rounded[1]}</div>
    </span>
    `;
});

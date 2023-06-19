let temprature = document.getElementById("temprature");
let convert = document.getElementById("convert");
let option = document.getElementById("option");
let result = document.getElementById("result");
let step = document.getElementById("step");


function printStep(value, option, result) {
  console.log(option);
  switch (option) {
    case "celcius":
      return `(${value}°F -32) * (5/9) = ${result}°C`;
    case "farentheit":
      return `${value}°C * (9/5) + 32 = ${result}°F`;
    default:
      break;
  }
}

function calculateCelcius(value) {
  return (value - 32) * 5 / 9
}

function calculateFarentheit(value) {
  return (value * 9 / 5) + 32
}

convert.addEventListener("click", () => {
  let value = temprature.value;
  if (!value) {
    alert("insert number first");
    return
  }
  switch (option.value) {
    case "celcius":
      result.value = calculateCelcius(value);
      step.value = printStep(value, option.value, result.value)
      break;
    case "farentheit":
      result.value = calculateFarentheit(value);
      step.value = printStep(value, option.value, result.value)
      break;
    default:
      alert("please select metric first!")
      break;
  }
});
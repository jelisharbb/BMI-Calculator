let calculate = document.getElementById("calculate");
let clear = document.getElementById("clear");

calculate.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("result");
  let heightStatus = false,
    weightStatus = false;

  if (isNaN(height) || height <= 0) {
    document.getElementById("height-error").innerHTML = "Invalid height";
  } else {
    document.getElementById("height-error").innerHTML = "";
    heightStatus = true;
  }

  if (isNaN(weight) || weight <= 0) {
    document.getElementById("weight-error").innerHTML = "Invalid weight";
  } else {
    document.getElementById("weight-error").innerHTML = "";
    weightStatus = true;
  }

  if (heightStatus && weightStatus) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      result.innerHTML =
        "<b>BMI:</b> " + bmi + "<br><b>Weight Status</b>: Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML =
        "<b>BMI:</b> " + bmi + "<br><b>Weight Status</b>: Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML =
        "<b>BMI:</b> " + bmi + "<br><b>Weight Status</b>: Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
      result.innerHTML =
        "<b>BMI:</b> " + bmi + "<br><b>Weight Status</b>: Obese";
    } else {
      result.innerHTML =
        "<b>BMI:</b> " + bmi + "<br><b>Weight Status</b>: Extremely obese";
    }
  } else {
    alert("The form has error.");
    result.innerHTML = "";
  }
});

clear.addEventListener("click", () => {
  window.location.reload();
});

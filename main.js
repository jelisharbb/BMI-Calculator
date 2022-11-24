let button = document.getElementById("button");

button.addEventListener("click", () => {
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
    const bmi = weight / ((height * height) / 10000).toFixed(2);

    if (bmi < 18.5) {
      result.innerHTML = "BMI: " + bmi < br > "Weight Status: Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML = "BMI: " + bmi < br > "Weight Status: Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML = "BMI: " + bmi < br > "Weight Status: Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
      result.innerHTML = "BMI: " + bmi < br > "Weight Status: Obese";
    } else {
      result.innerHTML = "BMI: " + bmi < br > "Weight Status: Extremely obese";
    }
  }
});

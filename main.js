let button = document.getElementById("button");

button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("result");
  let heightStatus = false,
    weightStatus = false;

  if (isNaN(height) || height <= 0) {
    document.getElementById("height-error").innerHTML = "*Invalid height";
  }
});

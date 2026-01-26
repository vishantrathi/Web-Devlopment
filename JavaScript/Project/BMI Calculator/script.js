const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#Height').value);
  const weight = parseInt(document.querySelector('#Weight').value);

  if (isNaN(height) || height <= 0) {
    result.innerHTML = "Please enter a valid height.";
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = "Please enter a valid weight.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let category = "";
    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal";
    } else {
      category = "Overweight";
    }

    result.innerHTML = `<h2>Your BMI is ${bmi}</h2><p>You are <strong>${category}</strong></p>`;
  }
});

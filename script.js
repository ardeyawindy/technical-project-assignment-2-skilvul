function calculateBMI() {
	const weight = document.getElementById("weight").value;
	const height = document.getElementById("height").value / 100;
	const bmi = weight / (height * height);
	const resultElement = document.getElementById("result");
	const categoryElement = document.getElementById("category");

	if (isNaN(bmi)) {
		resultElement.textContent = "Invalid input";
		categoryElement.textContent = "";
	} else {
		resultElement.textContent = bmi.toFixed(2);

		if (bmi < 18.5) {
			categoryElement.textContent = "Underweight";
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			categoryElement.textContent = "Normal weight";
		} else if (bmi >= 25 && bmi <= 29.9) {
			categoryElement.textContent = "Overweight";
		} else if (bmi >= 30 && bmi <= 34.9) {
			categoryElement.textContent = "Obese (Class I)";
		} else if (bmi >= 35 && bmi <= 39.9) {
			categoryElement.textContent = "Obese (Class II)";
		} else {
			categoryElement.textContent = "Obese (Class III)";
		}
	}
}

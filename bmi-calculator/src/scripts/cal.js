function calculateBMI() {
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;
    const resultDisplay = document.getElementById('result');

    if (weightInput === '' || heightInput === '') {
        resultDisplay.textContent = 'Please enter both weight and height.';
        return;
    }

    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput) / 100; 

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultDisplay.textContent = 'Please enter valid numbers for weight and height.';
        return;
    }

    const bmi = weight / (height * height);
    resultDisplay.textContent = `Your BMI is ${bmi.toFixed(2)}`;
}

document.getElementById('calculate-btn').addEventListener('click', calculateBMI);
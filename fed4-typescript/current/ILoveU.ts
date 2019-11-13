function BMI(weight, height) {
    let BMI = weight / (height ** 2);
    let message = "";
    if (BMI <= 18.5) {
        message = "Underweight";
    } else if (BMI > 18.5 && BMI <= 25) {
        message = 'Normal';
    }
    else if (BMI > 25 && BMI <= 30) {
        message = "Overweight";
    } else if (BMI > 30) {
        message = "Obese";
    } else {
        message = "undefined";
    }
    return message;
}

console.log(BMI(75, 1.90));
function compose(name, age, weightInKg, height) {    
    const bmi = Math.round(weightInKg / ((height / 100) ** 2));

    const generateStatus = (bmi) => {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }

    const currPerson = {
        name,
        personalInfo: {
            age,
            weight: weightInKg, 
            height
        },
        BMI: bmi,
        status: generateStatus(bmi)
    }

    if (currPerson.status === 'obese') {
        currPerson.recommendation = 'admission required';
    }

    return currPerson;
}

console.log(compose('Honey Boo Boo', 9, 57, 137));
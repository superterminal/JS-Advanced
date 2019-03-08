function solve(currentCar) {
    if (currentCar.power <= 90 && currentCar.power < 109) {
        currentCar.engine = { power: 90, volume: 1800 };
    } else if (currentCar.power >= 110 && currentCar.power < 119) {
        currentCar.engine = { power: 120, volume: 2400 };
    } else if (currentCar.power >= 120) {
        currentCar.engine = { power: 200, volume: 3500 };
    }

    delete currentCar.power;

    currentCar.carriage = {type: currentCar.carriage, color: currentCar.color};

    delete currentCar.color;

    let tiresArr = [];

    for(let i = 0; i < 4; i++) {
        tiresArr.push(currentCar.wheelsize);
    }

    if (currentCar.wheelsize % 2 === 0) {
        let newArr = tiresArr.map(el => --el);
        currentCar.wheels = newArr;
    } else {
        currentCar.wheels = tiresArr;
    }

    delete currentCar.wheelsize;

    return currentCar;
}

console.log(solve({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
}));
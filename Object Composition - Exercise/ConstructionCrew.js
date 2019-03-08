function solve(currObj) {
    if (currObj.handsShaking === true) {
        currObj.bloodAlcoholLevel += 0.1 * currObj.weight * currObj.experience;
        currObj.handsShaking = false;
        return currObj;
    } else {
        return currObj;
    }
}

console.log(solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }));
function greatestCommonDiv(num1, num2) {

    if (num2 === 0) {
        return num1;
    }

    return greatestCommonDiv(num2, num1 % num2);
}
console.log(greatestCommonDiv(252, 105));
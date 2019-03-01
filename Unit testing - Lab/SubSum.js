function subsum(arr, startIndex, endIndex) {

    if (arr.length === 0) {
        return 0;
    }

    if (!Array.isArray(arr)) {
        return NaN;
    }

    let isNaNArr = arr.filter(num => !isNaN(num));
    if (isNaNArr.length !== arr.length) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }
    
    if (endIndex >= arr.length) {
        endIndex = arr.length - 1;
    }

    return arr
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((a, b) => a + b);
}
console.log(subsum({}, 3, 300))
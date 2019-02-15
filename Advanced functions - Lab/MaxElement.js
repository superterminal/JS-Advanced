function solve(arr) {
    return arr.reduce((acc, val) => acc < val ? val : acc ,-Infinity);
}
console.log(solve([10, 20, 5]));
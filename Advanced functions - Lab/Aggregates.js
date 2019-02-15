function solve(arr) {
    return function() {
        console.log(`Sum: ${arr.reduce((acc, val) => acc + val, 0)}`);

        return function () {
            console.log(`Min: ${arr.reduce((acc, val) => acc > val ? val : acc, +Infinity)}`);

            return function() {
                console.log(`Max: ${arr.reduce((acc, val) => acc < val ? val : acc, -Infinity)}`);

                return function() {
                    console.log(`Product: ${arr.reduce((acc, val) => acc * val,1)}`);

                    return function() {
                        console.log(`Join: ${arr.join('')}`);
                    }
                }
            }
        }
    }
}

solve([2, 3, 10, 5])()()()()();
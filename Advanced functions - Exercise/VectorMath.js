let solution = (function () {

    return  {
        add: ([x1, y1], [x2, y2]) => {
            return [x1 + x2, y1 + y2];
        },
        multiply: ([x1, y1], scalar) => {
            return [x1 * scalar, y1 * scalar];
        },
        length: ([x1, y1]) => {
            return Math.sqrt(x1 ** 2 + y1 ** 2);
        },
        dot: ([x1, y1], [x2, y2]) => {
            return x1 * x2 + y1 * y2;
        }, 
        cross: ([x1, y1], [x2, y2]) => {
            return x1 * y2 - y1 * x2;
        }
    }

})();
console.log(solution.cross([3, 7], [1, 0]))
const calc = (function () {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = function () {
        return sum;
    };

    return add;
})();

calc(3);
function solve(arr) {
    let processor = (function () {
        let currStr = '';

        return {
            append: (s) => currStr += s,
            removeStart: (n) => currStr = currStr.substr(n),
            removeEnd: (n) => currStr = currStr.substr(0, currStr.length - n),
            print: () =>  console.log(currStr)
        };
    })();
    arr.forEach(el => {
        let [command, value] = el.split(' ');
        processor[command](value);
    });
}
solve(['append 123',
'append 45',
'removeStart 2',
'removeEnd 1',
'print'])


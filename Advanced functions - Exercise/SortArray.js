function sortArr(arr, sortMethod) {
    const sortinStrat = {
        'asc': function(a, b) { return a - b },
        'desc': function(a, b) { return b - a }
    };
    
    return arr.sort(sortinStrat[sortMethod]);
}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
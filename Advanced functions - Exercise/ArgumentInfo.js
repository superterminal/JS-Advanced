function solve() {
    let summary = {};
    for (const currEl of arguments) {
        let currType = typeof currEl;
        if (!summary[currType]) {
            summary[currType] = 1;
        } else {
            summary[currType]++;
        }
 
        console.log(`${currType}: ${currEl}`);
    }   
    summary = Object.entries(summary).sort((a, b) => b[1] - a[1]);
    summary.forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    });
}

solve({ name: 'bob'}, 3.333, 9.999);

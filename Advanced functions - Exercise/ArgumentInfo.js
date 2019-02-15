function solve() {
    let summary = {};
    for (const currEl of arguments) {
        if (!summary[typeof currEl]) {
            summary[typeof currEl] = 1;
        } else {
            summary[typeof currEl]++;
        }
 
        console.log(`${typeof currEl}: ${currEl}`);
    }   
    summary = Object.entries(summary).sort((a, b) => b[1] - a[1]);
    summary.forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    });
}

solve({ name: 'bob'}, 3.333, 9.999);

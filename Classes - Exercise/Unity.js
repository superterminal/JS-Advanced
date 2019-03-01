class Rat {
    constructor(name) {
        this.name = name;
        this.totalRats = [];    
    }

    unite(currRat) {
        if(currRat instanceof Rat) {
            this.totalRats.push(currRat);
        }
    }

    getRats() {
        return this.totalRats;
    }

    toString() {
        let output = `${this.name}\n`;

        this.totalRats.forEach(el => {
            output += `##${el.name}\n`;
        });

        return output;
    }
}

let test = new Rat("Pesho");

console.log(test.toString());

test.unite(new Rat('gosho'));
test.unite(new Rat('stamat'));

console.log(test.toString());

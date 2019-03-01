class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(len) {
        this.innerLength += len;
    }

    decrease(len) {
        this.innerLength -= len;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        }

        if (this.innerString.length > this.innerLength) {
            let resultStr = this.innerString.slice(0, this.innerString.length - this.innerLength);
            resultStr += '...';
            return resultStr;
        }

        return this.innerString;
    }
}

let test = new Stringer('Test', 5);
test.decrease(3);
test.decrease(5);
console.log(test.toString());
test.increase(4);
console.log(test.toString());
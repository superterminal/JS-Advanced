let base = {
    name: 'pesho',
    age: 22,
    toString: function (){
        return `${this.name} - ${this.age}`;
    }
}

let child = Object.create(base);
Object.setPrototypeOf(base, null);
console.log(Object.getPrototypeOf(child))
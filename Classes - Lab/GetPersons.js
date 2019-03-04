function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let tempArr = [];

    tempArr.push(new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'));
    tempArr.push(new Person('SoftUni'));
    tempArr.push(new Person('Stephan', 'Nikolov', 25));
    tempArr.push(new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'));
    
    return tempArr;
}
console.log(solve());
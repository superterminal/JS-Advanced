class Validate {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId) {
        if (clientId.length === 6) {
            this._clientId = clientId;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }

    set email(email) {
        let pattern = /([\w]+@[A-Za-z\.]+)/gm;
        if (pattern.test(email)) {
            this._email = email;
        } else {
            throw new TypeError('Invalid e-mail');
        }
    }

    set firstName(firstName) {
        let wordLength = firstName.length >= 3 && firstName.length <= 20;
        let wordsPattern = /^[A-Za-z]+$/gm;

        if (!wordLength) {
            throw new TypeError('First name must be between 3 and 20 characters long')
        }

        if (!wordsPattern.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters')
        }

        this._firstName = firstName;
    }

    set lastName(lastName) {
        let wordLength = lastName.length >= 3 && lastName.length <= 20;
        let wordsPattern = /^[A-Za-z]+$/gm;

        if (!wordLength) {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }

        if (!wordsPattern.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters')
        }

        this._lastName = lastName;
    }

}

let test = new Validate('123456', 'pesho@abv.bg', 'gosho', 'pesho', 'peshov');
console.log(test)
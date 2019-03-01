class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(productsArr) {
        productsArr.forEach(el => {
            let [productName, productQuantity, productPrice] = el.split(' ');

            if (productPrice <= this.budget) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = productQuantity;
                } else {
                    this.productsInStock[productName] += productQuantity;
                }
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {productsNeeded: neededProducts, price: price};
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        let tempArr = [];

        Object.entries(this.menu).forEach(el => {
            tempArr.push(`${el[0]} - $${el[1].price}`);
        });

        return tempArr.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let currProductsNeeded = this.menu[meal].productsNeeded;
            let currProductsKeys = Object.keys(this.productsInStock);
            let counter = 0;
            for (let i = 0; i < currProductsNeeded.length; i++) {
                let currProductTokens = currProductsNeeded[i].split(' ');
                
                for (let j = 0; j < currProductsNeeded.length; j++) {
                    if (currProductTokens[0] === currProductsKeys[j]) {
                        counter++;
                    }
                }
            }

            if (counter === currProductsNeeded.length) {
                let products = currProductsNeeded.forEach(el => {
                    let elTokens = el.split(' ');
                    let currProduct = elTokens[0];
                    let quantity = elTokens[1];

                    this.productsInStock[currProduct] -= quantity;
                });
                this.budget += this.menu[meal].price;

                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 19.99));
console.log(kitchen.showTheMenu());
kitchen.makeTheOrder('frozenYogurt');
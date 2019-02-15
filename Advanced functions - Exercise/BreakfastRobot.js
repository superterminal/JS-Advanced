const robot = (function() {
    const ingredientsObj = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
    const recipesObj = {
        'apple': {carbohydrate: 1, flavour: 2},
        'coke': {carbohydrate: 10, flavour: 20},
        'burger': {carbohydrate: 5, fat: 7, flavour: 3},
        'omelet': {protein: 5, fat: 1, flavour: 1},
        'cheverme': {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    const prepareCurrentRecipe = (recipe, ingredientsNeeded) => {
        const currIngredients = Object.entries(recipesObj[recipe]);
        for (let [ing, qty] of currIngredients) {
            const ingredientsStored = ingredientsObj[ing] * ingredientsNeeded;
            if (qty > ingredientsStored) {
                return `Error: not enough ${ing} in stock`;
            }
        }

        for (const [ing, qty] of currIngredients) {
            ingredientsObj[ing] -= ingredientsNeeded * qty;
        }

        return 'Success';
    }
 
    return function(currInput) {
        let tokens = currInput.split(' ');
        let currCommand = tokens[0];

        if (currCommand === 'restock') {
            ingredientsObj[tokens[1]] += Number(tokens[2]);
            return 'Success';
        } else if (currCommand === 'prepare') {
            return prepareCurrentRecipe(tokens[1], Number(tokens[2]));
        } else {
            return Object.entries(ingredientsObj)
                .map(el => `${el[0]}=${el[1]}`)
                .join(' ');
        }
    }

})();
console.log(robot('restock carbohydrate 10'))
console.log(robot('restock flavour 10'));
console.log(robot('prepare apple 1'))
console.log(robot('restock fat 10'))
console.log(robot('prepare burger 1'))
console.log(robot('report'));

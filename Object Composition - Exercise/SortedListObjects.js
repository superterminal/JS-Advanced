function solve() {
    let funcs = (() => {
        let collection = [];
        let size = 0;

        function sort() {
            return collection.sort((a, b) => a - b);
        }
    
        const add = function (element) {
            collection.push(element);
            this.size++;
            sort();
        }
    
        const remove = function (index) {
            validateIndex(index);
            collection.splice(index, 1);
            this.size--;
        }
    
        const get = function (index) {
            validateIndex(index);
            return collection[index];
        };

        const validateIndex = function (index) {
            if (index < 0 || index >= collection.length) {
                throw new RangeError('index is out of bounds');
            }
        }

        return {
            add,
            remove,
            get,
            size
        }
    })();

    return funcs;
}

let list = solve();

list.add(5);
list.add(3);
list.remove(0);
console.log(list.get(0));
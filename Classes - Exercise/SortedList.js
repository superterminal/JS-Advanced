class sortedList {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    sort() {
        return this.collection.sort((a, b) => a - b);
    }

    add(element) {
        this.collection.push(element);
        this.size++;

        this.sort();
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size--;
        }

        this.sort();
    }

    get(index) {
        return this.collection[index];

        this.sort();
    }

}
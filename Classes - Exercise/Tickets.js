function tickets(currentTickes, sortMethod) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    currentTickes.forEach(el => {
        let currEl = el.split('|');
        currEl[1] = +currEl[1];
        tickets.push(new Ticket(currEl[0], currEl[1], currEl[2]));
    })

    return tickets.sort((a, b) => {
        if (a[sortMethod] < b[sortMethod]) {
            return -1;
        } else if (a[sortMethod] > b[sortMethod]) {
            return 1;
        }

        return 0;
    });
}
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'], 'destination'));
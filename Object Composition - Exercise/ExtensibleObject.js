function solve() {
    let obj = {
        extend: function (template) {
            let entries = Object.entries(template);
            entries.forEach(kvp => {
                if (typeof kvp[1] === 'function') {
                    Object.getPrototypeOf(this)[kvp[0]] = kvp[1];
                } else {
                    this[kvp[0]] = kvp[1];
                }
            });
        }
    }

    return obj;
}

const obj = solve();
obj.extend({
    extensionMethod: function () { console.log('attached') },
    extensionProperty: 'someString'
  });
console.log(Object.getPrototypeOf(obj));
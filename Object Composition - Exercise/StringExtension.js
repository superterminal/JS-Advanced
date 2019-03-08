let newFuncs = (function() {
    String.prototype.ensureStart = function (substr) {
        if (!this.startsWith(substr)) {
            return `${substr}${this}`;
        }
    
        return this.toString();
    }
    
    String.prototype.ensureEnd = function (substr) {
        if (!this.endsWith(substr)) {
            return `${this}${substr}`;
        }
    
        return this.toString();
    }
    
    String.prototype.isEmpty = function() {
        return this.length === 0;
    }
    
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        } 
    
        if (n >= this.length) {
            return this.toString();
        }
    
        let lastSpaceIndex = this.toString().substr(0, n - 2).lastIndexOf(' ');
    
        if (lastSpaceIndex !== -1) {
            return this.substr(0, lastSpaceIndex) + '...';
        } else {
            return this.substr(0, n - 3) + '...';
        }
    
    }
    
    String.format = function(string, ...params) {
        for(let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
    
        return string;
    }
})();

let str = 'my string'
str = str.ensureStart('my')
str = str.ensureStart('hello ')
str = str.truncate(16) 
str = str.truncate(14)
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
  console.log(str)
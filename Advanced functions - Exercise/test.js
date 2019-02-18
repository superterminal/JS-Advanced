// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }
  
//   //console.log(new Food('cheese', 5).name);
//   // expected output: "cheese"
  

//   let sampleObj = {
//     'a': 123,
//     'b': 'number',
//     'c': 13
//   };

//   [['a', 123], ['b', 'number']];

// sampleObj = Object.entries(sampleObj).sort((a, b) => b[0].localeCompare(a[0]));
// console.log(sampleObj);

function revStr(input) {
  let output = '';
  for (let c of input) {
    output = c + output;
  }
  console.log(output)
}

revStr('test')
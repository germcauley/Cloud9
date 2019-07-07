var faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log("=============================");
console.log("My Shop Prices from Faker Api")
console.log("=============================");
for(var i =0; i <10; i++){
    var product = faker.commerce.productName();
    var price = faker.commerce.price();
    console.log(product+"  "+"€"+price);  
}


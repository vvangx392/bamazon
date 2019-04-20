var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazondb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  loadProducts();
});

function loadProducts() {
  connection.query("SELECT * FROM product", function(err, res) {
    if (err) throw err;

    console.table(res);

    promptCustomerForItem(res);
  });
}

function promptCustomerForItem(inventory) {

  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ])
   .then(function(val) {
     checkIfShouldExit(val.choice);
     var choiceId = parseInt(val.choice);
      var product = checkInventory(item_id, products);

      if (products) {
       
       promptCustomerForQuantity(products);
      }
      else {
         
        console.log("\nThat item is not in the inventory.");
        loadProducts();
      }
    });
}


function promptCustomerForQuantity(product) {
  inquirer
    .prompt([
      {
       type: "input",
        name: "quantity",
        message: "How many would you like? [Quit with Q]",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "q";
        }
      }
    ])
     if (quantity > products.stock_quantity) {
        console.log("\nInsufficient quantity!");
       loadProducts();
      }
      else {
       makePurchase(products, quantity);
      }
    };


function makePurchase(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ?, product_sales = product_sales + ? WHERE item_id = ?",
    [quantity, product.price * quantity, product.item_id],
    function(err, res) {
      
      console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
      loadProducts();
    }
  );
}
// Check for the item 
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      
      return inventory[i];
    }
  }
  return null;
}


function checkIfShouldExit(choice) {
  if (choice.toLowerCase() === "q") {
    console.log("Goodbye!");
    process.exit(0);
  }
}
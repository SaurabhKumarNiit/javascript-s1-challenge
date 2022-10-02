//Declaring variables 

var customerName = 'Gary';
var customerEmail = 'gary@123.com';
var PhoneNo = 14123123435;
var Address = '20, Marble Drive, Eville';
var noOfPizzasOrdered = 10;
var pizzaPrice = 12.5;
var pizzaSize = 'M';
var noOfGarlicBreadOrdered = 5;
var garlicBreadPrice = 5.99;
var noOfBeveragesOrdered = 10;
var beveragePrice = 1.99;


// define function displayCustomerDetails() to display the details of customer passed as parameters.
function displayCustomerDetails(name, email, phoneNo, address) {

    console.log("Customer Name    : " + name);
    console.log("Customer Email   : " + email);
    console.log("Customer PhoneNo : " + phoneNo);
    console.log("Customer Address : " + address);
    console.log("-------------------------------------------------")

}

// define funciton displayMenu() to raise an alert that displays the menu with 
// category, item names and price
var order;
function displayMenu() {
    console.log("Select the items to order ")
    console.log("------------------------- ")
    console.log("1) Pizza ")
    console.log("Price of one regular pizza: $9.99 ")
    console.log("Price of one medium pizza: $11.99 ")
    console.log("Price of one large pizza: $9.99 ")
    console.log("2) Garlic Bread ")
    console.log("Price of one Garlic Bread: $5.99 ")
    console.log("3) Beverages ")
    console.log("Price of one Beverage: $1.99 ")
}


// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
// size passed as parameter.

function getPriceOfPizzaBasedOnSize(size) {
    console.log("priceOfPizza = 0");
    switch (size) {
        case 'S':
            console.log("priceOfPizza = 9.99");
            break;
        case 'M':
            console.log("priceOfPizza = 11.99");
            break;
        case 'L':
            console.log("priceOfPizza = 13.99");
            break;
        default:
            alert('Invalid size, Enter 1,2 or 3');
            console.log('priceOfPizza = 0');
            break;
    }
}

// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
function getPriceOfGarlicBread() {

    console.log("Price of one Garlic Bread: $5.99 ");
}

// define function getPriceOfBeverage() to return price of beverage as 1.99.
function getPriceOfBeverage() {
    console.log("Price of one Beverage: $1.99 ");
}

// define function calculatePrice() to return cost of items ordered for the 
// no of items and price passed as parameters.

function calculatePrice(noOfItems, price) {

    console.log("Calculated Price : " + (noOfItems * price))
}


// define function calculateTotalBill() to return total bill amount from the 
// total price of pizza, garlic bread and beverages ordered 
function calculateTotalBill(totalPizzaPrice, totalGarlicBreadPrice, totalBeveragePrice) {

    console.log("Total Bill Amount: " + (totalPizzaPrice + totalGarlicBreadPrice + totalBeveragePrice))
}


// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
// which will be calculated only if total bill is more than 50  
function calculateDiscountAndReturnBillAmount(TotalBillAmount) {
    if (TotalBillAmount > 50) {

        console.log("Discounted Total Bill Amount : " + (TotalBillAmount - (TotalBillAmount / 10)));
    }
    else {
        console.log("Total Bill Amount : " + TotalBillAmount)
    }

}

// define function displayOrderDetails() to print the order details
function displayOrderDetails(noOfPizza, noOfGarlicBread, noOfBeverages, size, totalPrice, totalBillAmountAfterDiscount) {

    console.log("Order Details");
    console.log("-----------------");
    console.log("The number of pizzas ordered       : "+noOfPizza);
    console.log("The number of garlic bread ordered : "+noOfGarlicBread);
    console.log("The number of beverages ordered    : "+noOfBeverages);
    console.log("-----------------------------------------");
    console.log("The total bill amount is      : $"+totalPrice);
    console.log("The discounted bill amount is : $"+totalBillAmountAfterDiscount);
}

//Main Program

// call the functions to compute order amount and display order details

// var Name = String(prompt (" Enter the Cusomer Name :"));
// var EmailId = String(prompt (" Enter the Cusomer Email Id :"));
// var Ages = String(prompt (" Enter the Cusomer Age :"));
// var Addresss = String(prompt (" Enter the Cusomer Address :"));



displayCustomerDetails(customerName, customerEmail, PhoneNo, Address);

//displayMenu();

//getPriceOfPizzaBasedOnSize(pizzaSize)
var totalBillamount=119.9+19.9+29.95;
var totalBillAfterDiscount=152.775;
displayOrderDetails(noOfPizzasOrdered,noOfGarlicBreadOrdered,noOfBeveragesOrdered,pizzaSize,totalBillamount,totalBillAfterDiscount)


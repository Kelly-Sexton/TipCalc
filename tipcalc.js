$(function () {

var bill = parseInt($("#bill"), 10);

var people = parseInt($("#people"),10);

var service = $("#service");

// var bill = 20;//hardwired for debugging

// var people = 4;//hardwired for debugging

// var service = .05;//hardwire

var tip = (bill * service); 

var splitTip = ((bill / people) * service);

var splitBill = (bill / people);

var splitTotal = (splitBill + splitTip);

var total = (bill + tip);



console.log(bill);
console.log(tip);
console.log(splitTip);
console.log(splitBill);
console.log(splitTotal);
console.log(total);



})



































$(function () {
$("#submit").click(function(){
var prebill = $( "#bill" ).val();
var people = $( "#people" ).val();
// var service = $("#service").change();
var service = "3";
var splitBill = (((parseInt(prebill, 10)*100) / parseInt(people, 10)) / 100);
var splitTip = (((parseInt(prebill, 10)*100) * parseInt(service, 10)) / (parseInt(people, 10))/1000); var splitTotal = (splitBill + splitTip);
var tip = "Tip $";
var bill = "Bill $";
var total = "Total $";
$( "#showTip" ).html( "<h2>" + tip + splitTip.toFixed(2) + "</h2>" )
$( "#showBill" ).html( "<h2>" + bill + splitBill.toFixed(2) + "</h2>" )
$( "#showTotal" ).html( "<h2>" + total + splitTotal.toFixed(2) + "</h2>" )
})
})
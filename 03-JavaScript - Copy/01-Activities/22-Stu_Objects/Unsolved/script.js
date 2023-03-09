//WRITE YOUR CODE BELOW
var drinkName;
var NumberOfSugars;
var isOrderReady;
drinkName=prompt("What is your drink name?");
numberOfSugars=prompt("# of sugars");
IsOrderReady=prompt("Is your order ready?");

var customOrders={
    drink:drinkName,
    sugars:NumberOfSugars,
    ready:IsOrderReady,
    
}
customOrders.ready.toUpperCase();
if(customOrders.ready==="YES"){
    console.log("Order is ready for pickup!");
}
else{
    console.log("keep waiting bro.");
}
// Create a function called totalSales(). The function will use a loop to ask the user to enter amounts until they enter the word "done". The body of the loop will add the input amount to a variable called totalSales. When the loop ends the function should display the value of totalSales in an alert.

function totalSales() {
  var x = prompt("Enter numeric until done")
  var amount = "";
  var totalSales = 0;

  while(x!=="done")
  {
    x = prompt("Enter numeric until done");

    if(x==="done")
    {
      alert(totalSales);
    }
    else if(!isNaN(x))
    {
      totalSales += parseInt(x, 10);
    }
  }
}
totalSales();
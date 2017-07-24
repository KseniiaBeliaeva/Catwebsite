var total_amount = 0;
var this_amount;

while (true) {
    this_amount = prompt('How much money you have?')
    this_amount = parseFloat(this_amount);
    if (this_amount > 0);
    total_amount += this_amount;
    else 
    break;
}
alert('You have ' + total_amount + ' dollars on yout account');
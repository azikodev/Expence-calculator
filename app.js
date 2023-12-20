function myFunction() {
    let name = prompt("Please enter your name!");
    let cost = prompt(name + " Iltimos byudjetingizdagi pulingizni kiriting, so'mda! ");
    let usd = 11000.34;
    let euro = 13254.03;

    let ticket = usd * 500;
    let pay = usd * 250;
    let place = euro * 120;
    let allPrice = ticket + pay + place;
    let allExpense = cost - allPrice ; 
    let Expence = allExpense * -1

    if (allExpense >= 0) {
        document.getElementById("demo").innerHTML =
            "Oq yo'l, " + name +", Sizning xarajatlaringizdan tashqari hisobingizda, " + allExpense +" so'm qolyapti";
    } else {
        document.getElementById("demo").innerHTML =
            "Sorry, " + name + ", ozgina yana sabr qilish kerak ekan Sizga, "+ Expence + " so'm yetmayapti!";
    }
}

// Написать функцию, преобразующую число в объект. 
//Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
//Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
//Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var user_number = +prompt("Введите число от 0 до 999: ")

function dig_to_obj(number){

	var digit = {"единицы": 0, "десятки": 0, "сотни": 0,};
        
    if (number <= 9){
        digit["единицы"] = number;
    } else if (number <= 999){
        digit["единицы"] = Math.floor(number % 10);
        digit["десятки"] = Math.floor(number / 10 % 10);
        digit["сотни"] = Math.floor(number / 100 % 10);
    }else {
    	digit.number = 0;
        console.log("Вы ввели число за диапазоном 0 - 999");}
    
    console.log(digit);}
        
dig_to_obj(user_number)

// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

function prod_to_bask(arr, name, price, quantity) {
    
    arr.push({product: name, price: price, quantity: quantity, total: totalSum});
}
        
function totalSum() {
            
    return this.price * this.quantity;
}
        
var basket = [
            
    {product: "Samsung Galaxy A71", price: 27000, quantity: 1, total: totalSum},
    {product: "silicone case", price: 500, quantity: 2, total: totalSum},
    {product: "headphones", price: 1100, quantity: 1, total: totalSum},
    {product: "safety glass", price: 150, quantity: 5, total: totalSum},]

function countBasketPrice(arr) {
            
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();}
    return sum;
}
        
function descBasketPrice(arr) {
            
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}
        
alert("В корзину добавлены следующие товары:\n" + descBasketPrice(basket) + "\nОбщая стоимость составляет: " + countBasketPrice(basket));

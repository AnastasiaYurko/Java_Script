/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */

for(var i = 2; i <= 100; i++) {
  var prime = true;
  for(var j = 2; j < 1; j++) {
    if((i % j) === 0) {
      prime = false;
      break
    }
  }

  if(prime) {
    console.log(i)
  }
}

/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

var basket = [{product: "powerbank", price: 1400}, {product: "phone glass", price: 500}];

function countBasketPrice(arr) {
  var basketPrice = 0;
  var basketProduts = [];
        for (var prod of basket){
            basketPrice += prod.price;
            basketProduts.push(prod.product);
        }
  alert("В вашей корзине находятся следующие товары:");
  alert(basketProduts);
  alert("Сумма товаров в Вашей корзине: " + basketPrice);
}   

countBasketPrice(basket);

/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто} */

	for (var i = 0; i < 10; i++)
	alert(i);

/*5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx*/

var a = "x";
var counter = 0;
var pir = a;
while (counter <= 20){
  counter++;
  console.log(pir += a);
}
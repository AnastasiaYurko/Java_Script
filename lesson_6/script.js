var item_1 = document.querySelector(".product .buy_1");
var item_2 = document.querySelector(".product .buy_2");
var item_3 = document.querySelector(".product .buy_3");
var price_1 = 7990;
var price_2 = 9490;
var price_3 = 3690;
var total_1 = 0;
var total_2 = 0;
var total_3 = 0;
var number_1 = 0;
var number_2 = 0;
var number_3 = 0;

item_1.onclick = function () {
	document.querySelector(".cart .count").innerHTML = number_1 + 1 + number_2 + number_3;
	number_1++;
	total_1 = number_1 * price_1;
	document.querySelector(".cart .item_price").innerHTML = "Buffalo shoes: " + total_1 + " ₽";
	total_price();
	item_1_info();
}


item_2.onclick = function () {
	document.querySelector(".cart .count").innerHTML = number_2 + 1 + number_1 + number_3;
	number_2++;
	total_2 = number_2 * price_2;
	document.querySelector(".cart .item_price").innerHTML = "RS-X Convey: " + total_2 + " ₽";
	total_price();
	item_2_info();
}

item_3.onclick = function () {
	document.querySelector(".cart .count").innerHTML = number_3 + 1 + number_2 + number_1;
	number_3++;
	total_3 = number_3 * price_3;
	document.querySelector(".cart .item_price").innerHTML = "LITE RACER: " + total_3 + " ₽";
	total_price();
	item_3_info();
}


function total_price() {
	var total_price = total_1 + total_2 + total_3;
	document.querySelector(".cart .total_price").innerHTML = "Общая стоимость: " + total_price + " ₽";
}

function item_1_info() {
	document.querySelector(".cart .item_1").innerHTML = "Buffalo shoes - " + number_1 + " шт.";
}

function item_2_info() {
	document.querySelector(".cart .item_2").innerHTML = "RS-X Convey - " + number_2 + " шт.";
}

function item_3_info() {
	document.querySelector(".cart .item_3").innerHTML = "LITE RACER - " + number_3 + " шт.";
}

var clear = document.querySelector(".cart .delete");


clear.onclick = function total_price() {
	location.reload();
}



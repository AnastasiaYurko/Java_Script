 /*Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию */

var Tc = prompt("Введите темперауру в градусах по Цельсию: ")
var Tf = (9 / 5) * Tc + 32
alert("Температура в градусах по Фарингейту: " + Tf)

/* 2. Работа с переменными.
3. Объявить две переменные: admin и name. Записать в name строку "Василий"; 
Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).*/

var name = "Василий"
var admin = name
alert(admin)

// 4. *Чему будет равно JS-выражение 1000 + "108" = 1000108


/* 5. *Самостоятельно разобраться с атрибутами тега script (async и defer) 
Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, 
а затем запустить этот скрипт, когда он загрузится.
Скрипты с defer никогда не блокируют страницу.
Скрипты с defer всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded.
Отложенные с помощью defer скрипты сохраняют порядок относительно друг друга, как и обычные скрипты.
Поэтому, если сначала загружается большой скрипт, а затем меньшего размера, то последний будет ждать.

Атрибут async означает, что скрипт абсолютно независим:
Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
Событие DOMContentLoaded и асинхронные скрипты не ждут друг друга:
DOMContentLoaded может произойти как до асинхронного скрипта (если асинхронный скрипт завершит загрузку после того, как страница будет готова),
…так и после асинхронного скрипта (если он короткий или уже содержится в HTTP-кеше)
Остальные скрипты не ждут async, и скрипты casync не ждут другие скрипты.
Так что если у нас есть несколько скриптов с async, они могут выполняться в любом порядке. То, что первое загрузится – запустится в первую очередь
Содержимое страницы отображается сразу же : async его не блокирует.
DOMContentLoaded может произойти как до, так и после async, никаких гарантий нет.
Асинхронные скрипты не ждут друг друга. Меньший скрипт small.js идёт вторым, но скорее всего загрузится раньше long.js, поэтому и запустится первым. 
То есть, скрипты выполняются в порядке загрузки.
Асинхронные скрипты очень полезны для добавления на страницу сторонних скриптов: счётчиков, рекламы и т.д. 
Они не зависят от наших скриптов, и мы тоже не должны ждать их*/
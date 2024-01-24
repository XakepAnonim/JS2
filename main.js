// Задачи
//
// for (let i = 0; i <= 100; i++) {
//     console.log(i)
// }
//
// for (let j = 11; j <= 33; j++) {
//     console.log(j)
// }
//
// for (let k = 0; k <= 100; k += 2) {
//     console.log(k)
// }
//
// let result = 0
// for (let l = 1; l <= 100; l++) {
//     result += 1
// }
// console.log(result)


// Работа с for для массивов
//
// let array = [1, 2, 3, 4, 5];
// for (let i in array) {
//     console.log(array[i])
// }
//
// let result = 0
// for (let i in array) {
//     result += array[i]
// }
// console.log(result)


// Работа с for-in
//
// var obj = {
//     green: 'зеленый',
//     red: 'красный',
//     blue: 'голубой'
// }
// for (let i in obj) {
//     console.log(i, obj[i])
// }
//
// let obj = {
//     Коля: "200",
//     Вася: "300",
//     Петя: "400"
// }
//
// for (let i in obj) {
//     console.log(`${i} - зарплата ${obj[i]} долларов.`)
// }


// Задачки
// 1
// let array = [2, 5, 9, 15, 0, 4];
// for (let i in array) {
//     let j = array[i];
//
//     if (j > 3 && j < 10) {
//         console.log(j)
//     }
// }
// 2
// let i = 0
// for (let j = 0; i < array.length; i++) {
//     if (array[j] > 0) {
//         i += array[j]
//     }
// }
// console.log(i)
// 3
// let array = [1, 2, 5, 9, 4, 13, 4, 10];
// let j = false;
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 4) {
//         j = true;
//         break;
//     }
// }
// if (j) {
//     console.log('Есть!');
// } else {
//     console.log('Нет');
// }
// 4
// let array = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < array.length; i++) {
//     let j = array[i].toString();
//
//     if (j[0] === "1" || j[0] === "2" || j[0] === "5") {
//         console.log(array[i])
//     }
// }
// 5
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let minus = '-';
//
// for (let i = 0; i < array.length; i++) {
//     minus += array[i] + '-'
// }
// console.log(minus)
// 6
// let weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//
// for (let i = 0; i < weeks.length; i++) {
//     if (i >= 5) {
//         console.log('**' + weeks[i] + '**')
//     } else {
//         console.log(weeks[i])
//     }
// }
// 7
// let date = new Date()
// let weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let day = weeks[date.getUTCDay()]
//
// for (let i = 0; i < weeks.length; i++) {
//     if (weeks[i] === day) {
//         console.log('*' + weeks[i] + '*');
//     } else {
//         console.log(weeks[i])
//     }
// }
// 8
// let n = 1000;
// let num = 0;
// while (n >= 50) {
//     n /= 2;
//     num++
// }
// console.log(num)
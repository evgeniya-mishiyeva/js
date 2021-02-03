//Создайте функцию, которая возвращает сумму двух наименьших положительных чисел из массива минимум 4 положительных целых чисел. Не передаются числа с плавающей запятой или неположительные целые числа.
let arr = [8, 3, 1, 4, 7];

function getMin(args) {
    let min = args[0];
    let minIndex = 0;
    for (let i = 1; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
            minIndex = i;
        }
    }
    arr.splice(minIndex, 1);
    return min;
}

function sum() {
    let min_1 = getMin(arr);
    let min_2 = getMin(arr);
    return min_1 + min_2;
}
console.log(sum());
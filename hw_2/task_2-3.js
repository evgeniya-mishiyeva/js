let myArray = new Array();
let i = 0;
let number = 0;

while (true) {
    number = prompt('Enter 0 or 1');

    if (number == 0 || number == 1) {
        myArray[i] = number;
        i++;
        let isEnough = confirm('Do you need one more 0 or 1?');
        if (!isEnough)
            break;
        else continue;
    }
    else continue;
}

console.log(myArray);

let myString = '';
for (let val of myArray) {
    myString += val;
}

console.log(myString);

let result = parseInt(myString, 2);
console.log(result);
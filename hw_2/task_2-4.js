let medianNumber;
while (true) {
    medianNumber = parseInt(prompt("Enter a number"));
    if (isNaN(medianNumber) || null)
        continue;
    else break;
}

let arrLength = 2 * medianNumber - 1;
let arr = [];
let mediana = medianNumber - 1;

for (let n = 0; n < medianNumber; n++) {
    let rowString = '';
    for (let i = 0; i < arrLength; i++) {
        if (i >= mediana - n && i <= mediana + n)
            rowString += '#';
        else rowString += '-';
    }
    console.log(rowString);
}
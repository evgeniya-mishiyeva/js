function getMin (...a) {
    let min = arguments[0];
    for (let value of arguments) {
        if (value < min) {
            min = value;
        }
    }
    console.log(min);
}

getMin(100, 45, 26, 78, 76);
let myObj = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'sunday',
    8: 'monday',
    9: 'tuesday',
    10: 'wednesday',
    11: 'thursday',
    12: 'friday',
    13: 'saturday',
    14: 'sunday',
    15: 'monday',
    16: 'tuesday',
    17: 'wednesday'
}
function countDaysInObject() {
    let i = 0;
    for (let val in myObj) {
        countDayOfWeek(myObj[val]);
        i++;
        if (i == 7)
        break;
    }
}

function countDayOfWeek(day) {
    let count = 0;

    for (let val in myObj) {
        if (myObj[val] == day) {
            count++;
        }
    }

    console.log(`${day}: ${count}`);
}

countDaysInObject();
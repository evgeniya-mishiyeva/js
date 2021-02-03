//Многоквартирный дом характеризуется следующими тремя показателями: этажность (1-25), число подъездов (1-10), количество квартир на лестничной площадке (1-20). Скрипт запрашивает эти показатели и номер квартиры. Выводится номер подъезда, в котором находится указанная квартира. При вводе некорректных данных предусмотреть alert. Config должен содержать все єти данніе(этажность, число подъездов,  количество квартир на лестничной площадке )и должен біть не публичнім

function getFloors() {
    while (true) {
        let temp = prompt(`Enter the quantity of floors:`);
        if (parseInt(temp)) {
            return temp;
        }
        else continue;
    }
}

function getEntrances() {
    while (true) {
        let temp = prompt(`Enter the quantity of entrances:`);
        if (parseInt(temp)) {
            return temp;
        }
        else continue;
    }
}

function getFlats() {
    while (true) {
        let temp = prompt(`Enter the quantity of flats:`);
        if (parseInt(temp)) {
            return temp;
        }
        else continue;
    }
}

function getFlatNumber() {
    while (true) {
        let temp = prompt(`Enter the flat number:`);
        if (parseInt(temp)) {
            return temp;
        }
        else continue;
    }
}

let tempHouse = {
    floors: getFloors(),
    entrances: getEntrances(),
    flats: getFlats(),
    flatNumber: getFlatNumber()
}

let checkHouse = function (house) {
    let config;
    return function setConfig() {
        if (house.floors >= 1 && house.floors <= 25 || house.entrances >= 1 && house.entrances <= 10 || house.flats >= 1 && house.flats <= 20)
            checkFlat(house);
        else console.log("You entered wrong data.")
    }
}

function checkFlat(house) {
    if (house.flatNumber > house.flats * house.floors * house.entrances)
        console.log('You entered wrong flat number.');
    else {
        let flatsInEntrance = house.floors * house.flats;
        let numberOfEntrance = Math.ceil(house.flatNumber / flatsInEntrance);
        let numberOfFloor = house.flatNumber % flatsInEntrance == 0 ? house.flatNumber / house.flats / numberOfEntrance : Math.ceil((house.flatNumber % flatsInEntrance) / house.flats);
        console.log(`Entrance: ${numberOfEntrance}\nFloor: ${numberOfFloor}`);
    }
}

checkHouse(tempHouse)();
//var ingredients = ['meat', 'sausage', 'oil', 'garlic', 'onion', 'tomatoPaste', 'pickles', 'olives', 'spice', 'lemon', 'sourCream'];
//var quantities = [450, 300, 2, 2, 1, 1, 2, 30, 20, 0.5, 2];
var ingredients = ['meat', 'oil'];
var quantities = [450, 2];
var myIngredients = [];
var myQuantities = [];
var tempIngredient;
var tempQuantity;

function receipe() {
    alert('For the best Solyanka you need these:\nmeat: 450g;\nsausage: 300g;\noil: 2 tablespoons;\ngarlic: 2 pieces;\nonion: 1 piece;\ntomato paste: 1 tablespoon;\npickles: 2 pieces;\nolives: 30g;\nspice: 20g;\nlemon: 0.5 piece;\nsour cream: 2 tablespoons;');
}

function getIngredients() {
    while (true) {
        tempIngredient = prompt("Enter an ingredient for Solyanka");
        if (!(tempIngredient === null || tempIngredient === '')) {
            myIngredients.push(tempIngredient);
            getQuantity();
            let isEnough = confirm(`You\'ve just added ${tempIngredient}. Do you need more ingredients?`);
            if (!isEnough)
                break;
            else continue;
        }
        else continue;
    }
}

function getQuantity() {
    tempQuantity = 0;
    while (true) {
        let temp = parseInt(prompt(`Enter quantity of ${tempIngredient}`));
        if (!(isNaN(temp))) {
            if (confirm(`Did you add enough of ${tempIngredient}?`)) {
                myQuantities.push(tempQuantity += temp);
                break;
            }
            else {
                tempQuantity += temp;
                continue;
            }
        }
        else continue;
    }
}

function comparison() {
    if (ingredients.length != myIngredients.length)
        alert('Your Solyanka is not Solyanka');
    else if (isEqualIngredients())
        alert('Your Solyanka is perfect!');
    else alert('Check your recipe!');
}

function isEqualIngredients() {
    let flag = false;
    for (let i = 0; i < myIngredients.length; i++) {
        let index = ingredients.indexOf(myIngredients[i]);
        if (index > -1 && (myQuantities[i] == quantities[index]))
            flag = true;
        else {
            flag = false;
            break;
        }
    }
    return flag;
}

(function makeSolyanka() {
    receipe();
    getIngredients();
    comparison();
}());


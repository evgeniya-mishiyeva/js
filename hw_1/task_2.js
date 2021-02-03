var myObject = new Object();

function objectSet(name_, value_) {
    myObject.name = name_;
    myObject.value = value_;
}

function objectGet(name_) {
    console.log(myObject.value);
}

objectSet("Evgeniya", 7);
objectGet("Evgeniya");
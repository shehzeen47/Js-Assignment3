var city = "karachi";
if (city = "karachi") {
    alert("Welcome to city of lights")
};

var gender = prompt ("Your Gender");
var message;
if (gender === "male") {
    message = "Good Morning Sir!"
}
if (gender === "female") {
    message = "Good Morning Mam!"
} alert (message);

var color = prompt ("Color Name");
if (color === "red") {
    alert("Must Stop");
} else if (color === "yellow") {
    alert("Ready to Move");
} else if (color === "green") {
    alert("Move Now");
}

var carFuel = prompt ("How much fuel you want?");
if (carFuel < "0.25liter") {
    alert("PLease refill the fuel in your Car");
}

// Q5
var a = 4;
if (++a === 5) {
    alert("Given Condition of variable is true")
}

var b = 82;
if (b++ === 83) {
    alert("Given Condition of variable b is true")
}

var b = 82;
if (b++ === 83) {
    alert("Given Condition of variable b is true")
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true")
} if (c === 13) {
    alert("condition 2 is true")
} if (++c < 13) {
    alert("condition 3 is true")
} if (c === 14) {
    alert("condition 4 is true")
}

// Q6
var materialCost = 20000;
var labourCost = 2000;
var TotalCost = materialCost + labourCost;
if (TotalCost === materialCost + labourCost) {
    alert("The Cost Equals")
}

if (true) {
    alert("True")
}
if (false) {
    alert("False")
}

// // Q
if ("car" < "cat") {
    alert("car is smaller than cat")
}


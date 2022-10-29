console.clear();
var f = "Welcome to TS Session";
console.log(f);
var name1 = ["tarek", "ahmad", "Amen", "Salem"];
var test = [5, 7, 6, 9, 1, 2, 4, 8, 6];
var bool_test = [true, false, true, false, true, false];
var tuple_test = ["ahmad", 5, true];
console.log(name1);
console.log(test);
console.log(tuple_test);
console.log(bool_test);
var doorstats;
(function (doorstats) {
    doorstats[doorstats["open"] = 0] = "open";
    doorstats[doorstats["closed"] = 1] = "closed";
    doorstats[doorstats["ajar"] = 2] = "ajar";
})(doorstats || (doorstats = {}));
function func(val) {
    console.log(val);
}
func(doorstats.ajar);

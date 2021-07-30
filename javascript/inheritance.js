// Exersice 1

function String(...value) {
    this.value = value;
}
String.prototype.filter = function(bannedList) {
    var strArr = this.value.toString().split(' ');
    console.log("... "+strArr+" "+typeof strArr);
    return strArr
        .filter((str) => { return !bannedList.includes(str) })
        .join(' ');
}
var string = new String("IT is not good!");
var bannedList = ['is', 'not'];
// console.log("=-> "+string.filter(bannedList));

// Exersice 2

function Arr(value) {
  this.value = value;
}
Arr.prototype.bubbleSort = function() {
  var result = [];
  for(var i=0; i<this.value.length; i++) {
    console.log(this.value[i]);
    for(var j=0; j<this.value.length; j++) {
      var tmp;
      if(this.value[i]<this.value[j]) {
        tmp = this.value[i];
        this.value[i] = this.value[j];
        this.value[j] = tmp;
      }
    }
  }
  return this.value;
}
var arr = new Arr([1,2,3,4,0,-1,-9,3]);
// console.log("=-> "+arr.bubbleSort());

// Exersice 3

var Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}
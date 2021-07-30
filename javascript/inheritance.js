// Exersice 1

String.prototype.filter = function(bannedList) {
 return this.split(" ").filter((str) => { return !bannedList.includes(str) })
        .join(' ');;
};

// Exersice 2

Array.prototype.bubbleSort = function() {
  var result = [];
  console.log(this.length)
  for(var i=0; i<this.length; i++) {
    for(var j=0; j<this.length; j++) {
      var tmp;
      if(this[i]<this[j]) {
        tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
      }
    }
  }
  return this;
}

// Exersice 3

var Person = function() {};
Person.prototype.initialize = function(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.describe = function() {
  return this.name + ", " + this.age + " years old.";
}

var Teacher = function() {};
  Teacher.prototype = new Person();
  Teacher.prototype.teach = function(subject) {
  return this.name + " is now teaching " + subject;
}
var me = new Teacher();

me.initialize("John", 25);
var result = me.teach("Inheritance");
console.log(result);

// OLD APPROACHES

// Exersice 1
/*
function String(...value) {
    this.value = value;
}
String.prototype.filter = function(bannedList) {
    var strArr = this.value.toString().split(' ');
    return strArr
        .filter((str) => { return !bannedList.includes(str) })
        .join(' ');
}
var string = new String("IT is not good!");
var bannedList = ['is', 'not'];
console.log("=-> "+string.filter(bannedList));

// Approach 2
String.prototype.filter1 = function(bannedList) {
 return this.split(" ").filter((str) => { return !bannedList.includes(str) })
        .join(' ');;
};

// Exersice 2

function Arr(value) {
  this.value = value;
}
Arr.prototype.bubbleSort = function() {
  var result = [];
  for(var i=0; i<this.value.length; i++) {
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
console.log("=-> "+arr.bubbleSort());
*/
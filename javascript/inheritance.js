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
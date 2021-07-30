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
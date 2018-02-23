class Sorter {
  constructor() {
    this.arr = [];    // arr
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];    // your implementation
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    this.start=indices.sort((a,b)=>a-b)[0];
    this.end=indices.sort((a,b)=>b-a)[0]+1;
    this.sorty=this.arr.slice( this.start , this.end);
    this.sorty.sort ((a,b)=>a-b);
    for (this.i=0; this.i<this.end-this.start; this.i++){  //{}
      this.arr[this.i+this.start]=this.sorty[this.i];
    } 
      return this.arr;
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
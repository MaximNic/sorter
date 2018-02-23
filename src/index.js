class Sorter {
  constructor() {
    this.arr = [];    // arr
    
    
  }

  add(element) {
    this.arr.push(element);

    
  }

  at(index) {
    this.arr[index];    // your implementation
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
    

/*      start=indices.sort((a,b)=>a-b)[0];
      end=indices.sort((a,b)=>b-a)[0]+1;
      sorty=arr.slice( start , end);
      console.log(sorty.sort ((a,b)=>a-b));
      for (i=0; i<end-start; i++)
        arr[i+start]=sorty[i];
      console.log(arr);



   */
    //this.arr.slice(indices.)
    //this.arr.concat ( this.arr.slice(0,this.start), this.arr.sort ( this.arr.slice( this.start , this.end)) ,  this.arr.slice(this.end, this.arr.length-1));
       // this.ind=[];
    //this.arr.sort[indices]        // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
function insert(a, index, value) {
    a.splice(index, 0, value);
   }
   let a = [0, 1, 3, 4]
   insert(a, 2, 2)
   console.log(a)
   
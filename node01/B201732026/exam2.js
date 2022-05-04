function remove(a, index) {
    return a.splice(index,index-1)
    
   }
   let a = [0, 1, 2, 3, 4]
   remove(a, 2)
   console.log(a)
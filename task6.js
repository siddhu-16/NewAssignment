//Linear search

function search(key){
    let arr = [10,4,2,5,7,9,1]
    for(let i=0;i<arr.length;i++ ){
      if(arr[i]===key){
        return i
      }
    }
    return -1
  }
console.log(search(4))
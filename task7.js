//Insertion sort

function sort(){
    let arr = [10,4,2,5,7,9,1]
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j>0;j--){
        if(arr[j]<arr[j-1]){
          let temp = arr[j]
          arr[j] = arr[j-1]
          arr[j-1] = temp
        }
        else{
          break;
        }
      }
    }
    return arr
  }

  console.log(sort())
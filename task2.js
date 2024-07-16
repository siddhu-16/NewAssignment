     
      // 1st pattern
      let str1 = ''
      for(let i = 1;i<=5;i++){
        for(let j = 1;j<=i;j++){
          
          str1+= "*" +' '
        }
        str1 += '\n'
        
      }
      console.log(str1)

      let str2 = ''
      for(let i = 1;i<=5;i++){
        for(let j = 5;j>=i;j--){
          str2+= "*" +' '
      }
        str2 += '\n'
    }
    console.log(str2)


    let str3 = ''
    let n = 5
    for(let i=1;i<=n;i++){
    let col
      if(i>n){
        col = 2*n - i
      }else{
        col = i
      }
      let sp = n - col
      for(let j=1;j<=sp;j++){
        str3+= ' ' 
      }
      for(let j=1;j<=i;j++){
        str3+= "*" + ' '
      }
      str3 +='\n'
    
    }
    console.log(str3)
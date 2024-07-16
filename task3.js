          // prime array
          let a=1;
          let b=100;
          let prime=[]
          for (let i = a; i <= b; i++) {
    
            if (i == 1 || i == 0)
                continue;
    
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                     prime.push(i)
                    break;
                }
            }         
            
        }
        console.log(prime)
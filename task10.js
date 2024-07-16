let str = "aaccbaccaacbcac"
let char = ''
let max = 0
for(let i=0;i<str.length;i++){
    let count = 0
    for(let j=i;j<str.length;j++){
        if(str[i] === str[j]){
            count++
           
        }
    }
    if(count>max){
        max = count
        char = str[i]
    }
    
}
console.log(char)
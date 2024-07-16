let number = 121
const str = number.toString();
      
const reversedStr = str.split('').reverse().join('');

if(str === reversedStr){
    console.log('is palindrome')
}
else{
    console.log('not palindrome')
}

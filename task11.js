//sort using keys

let myData = {
    
    'Rakesh' : 9,
    'Sai': 32,
    'Yash' : 200,
    'Ravindra' : 25,
    'Ashwin' : 100
}

let variable = Object.keys(myData).sort()
// console.log(variable)
variable.reduce((acc,key) =>{
    acc[key] = myData[key]
    return acc
})

console.log(variable)

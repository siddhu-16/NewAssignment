//matrix addition & substraction

let arr2 = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0]
    ];

let arr1 = [
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [18, 19, 10, 0],
];


    let result = [];
    for(let i=0;i<arr1.length;i++){
        let temp =[]
        for(let j=0;j<arr2[i].length;j++){

            temp.push(arr1[i][j] + arr2[i][j])  ;

        }
        result.push(temp)
        
    }
    console.log(result)

//sub
let result1 = [];
    for(let i=0;i<arr1.length;i++){
        let temp =[]
        for(let j=0;j<arr2[i].length;j++){

            temp.push(arr1[i][j] - arr2[i][j])  ;

        }
        result1.push(temp)
        
    }
    console.log(result1)
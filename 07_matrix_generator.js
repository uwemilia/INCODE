function matrixGen(height, width)
{
    let arr = [];
    for(let i = 0; i < height; i++)
    {
        arr[i] = [];
        for(let j = 0; j < width; j++)
        {
            arr[i].push((i+1)*(j+1))
        }
    }
    return arr;
}


console.log(matrixGen(1, 5)) 
// [ [ 1, 2, 3, 4, 5 ] ]

console.log(matrixGen(5, 4))
// [
//  [ 1, 2, 3, 4 ], 
//  [ 2, 4, 6, 8 ],
//  [ 3, 6, 9, 12 ],
//  [ 4, 8, 12, 16 ], 
//  [ 5, 10, 15, 20 ]
// ]

console.log(matrixGen(3, 6))
// [
//  [ 1, 2, 3, 4, 5, 6 ],
//  [ 2, 4, 6, 8, 10, 12 ],
//  [ 3, 6, 9, 12, 15, 18 ]
// ]

console.log(matrixGen(0, 0))
// []
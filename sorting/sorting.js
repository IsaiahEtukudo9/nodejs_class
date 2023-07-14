// ASCESNDING ORDER
const numbers = [8, 13, 7, 12, 16, 53, -2];
numbers.sort((a,b)=>{
    if (a > b) return 1; //(1) IS SEEN AS ASCENDING
    if (a < b) return -1 //(-1) SEEN AS DESCENDING
    return 0
});

console.log(numbers);


// DESCENDING ORDER 
const number = [8, 13, 7, 12, 16, 53, -2];
numbers.sort((a,b)=>{
    if (a > b) return -1;
    if (a < b) return 1
    return 0
});

console.log(numbers);



const num = [8, 6, 3, 4, 5, 9, 7, 1];
num.sort((a, b)=>{
    if (a > b) return 1;
    if (a < b) return -1
    return 0
});

console.log(num);

//Task1
let arr = [12, 28, 17, 73, 59, 65, 22];
let result = arr.sort();
console.log(result);



//Task2
let months = ["Yanvar","Fevral","Mart","Aprel"];

function indexOfMonths(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let num = i + 1;
        let value = array[i]+"-"+num;
        arr.push(value)
    }
    return arr;
}
console.log(indexOfMonths(months));



//Task3
let str = "Salam olsun hamiya";

function countOfString(str) {
    let arr = str.split(" ");
    let result = arr.map(m=>(m.length));
    return result;
}
console.log(countOfString(str));
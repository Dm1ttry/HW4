// Task 1 
let mename = 'Dima';
let surname = 'Gaponov';
console.log(' Привет', mename.toUpperCase(), surname.toUpperCase(),"\n",
'Привет', mename.toLowerCase(), surname.toLowerCase(),"\n",
'Привет', mename.toLowerCase(), surname.toUpperCase(),"\n",
'Привет', mename.toUpperCase(), surname.toLowerCase(),"\n",
'Привет'.toLowerCase(), mename.toUpperCase(), surname.toUpperCase(),"\n",)


// Task 2
let string = 'я учу typescript!';
if (string.includes('учу') === true){
    console.log(string.indexOf("учу"));
}else{
    console.log('Данной подстроки нет');
}

// Task 3 
function PositionNum(a: number, b: string) {
    if (b.length >= a){
        return 'Вы в строке';
    }else{
        return 'Вы вышли за границу строки';
    }
}
console.log(PositionNum(5, 'я учу typescript!'))


// Task 4 
function Point(a: string , b: string){
    if(a.endsWith('.') === Boolean(b)){
        return 'Данное предложение закончено';
    }else{
        return 'B конце предложения не хватает точки';
    }
}
console.log(Point('я учу typescript,' , "." ))


// Task 5 
let strin3 = 'я учу typescript!';
console.log(strin3.slice(2, 5) , strin3.slice(6, 16) ,"\n",
strin3.substring(2, 5), strin3.substring(6, 16)
);


// Task 6 
let strin4 = 'я учу typescript!';
console.log(strin4.split(""))


// Task 7 
let strin5 = '                я учу typescript!                ';
console.log(strin5.trim())


// Task 8 
let number1 = 8.829734872948;
console.log(number1.toFixed(3))


// // Task 9 
function Numbers(b : number){
    if(Number.isInteger(b)){
        return b;
    }else{
        return Math.floor(Number(b));
    }
}
console.log(Numbers(5))


// Task 10 
function Numbersmath1(b : number){
    return Math.floor(b);
}
function Numbersmath2(b : number){
    return Math.ceil(b);
}
function Numbersmath3(b : number){
    return Math.round(b);
}
console.log(Numbersmath1(1.5), Numbersmath2(3.5), Numbersmath1(4.3))


// Task 11 
function MathPow(a: number, b: number){
    return Math.pow(a, b);
}
console.log(MathPow(2, 2))


// Task 12 
function Random(a: number, b: number){
    return (a + Math.round(Math.random() * b));
}
console.log(Random(0, 10))


// Task 13 
function Random2(a: number, b: number){
    return (a + (Math.random() * b));
}
console.log(Random2(0, 10))


// Task 14 
const date: Date = new Date();
console.log('Текущая дата:', date.getMonth(), '/',date.getFullYear(), '/', date.getDate(),
'.Текущее время', date.getHours(), ':', date.getMinutes(), ':', date.getSeconds(), '.')

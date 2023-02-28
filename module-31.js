// function add(first,second=20){
//     const result=first+second;
//     return result;
// }
// console.log(add(10,50));

// const  add=function add(a,b){
//     const total=a+b;
//     return total;
// }
// const  add1=function add1(a,b){
//     const total=a+b;
//     return total1;
// }

// const multiply=(a,b)=>a*b;
// console.log(multiply(3,4))

// const singlePare=num=>num*5;
// console.log(singlePare(10));

// const numbers=[23,12,54,49]
// console.log(...numbers);
// const largest=Math.max(...numbers);
// console.log(largest)

// const number=[2,3,4,5,6]
// const number1=number;
// number.push(44)
// number1.push(443)
// console.log(number)
// console.log(number1)

// const number=[2,4,5,6,7];
// const number2=[2,4,5,6,7,65,43,555,...number,123];
// const number1=[...number];
// number1.push(23);
// console.log(number)
// console.log(number1)
// console.log(number2)

// const fish={
//            name:'hilsa',
//            age:2,
//            address:'padma',
//            contact:'4376876576',
// }
// const {name,address,contact,age}=fish;
// console.log(age);
// const number=[43,433,2,3,5]
// const [a,b,c,d,e]=number;
// console.log(number);
// console.log(d);
// const number=[43,433,2,3,5]
// const [a,b,...c]=number;
// console.log(number);
// console.log(c);

// const friendNew=friendName=>{
    
//     let newArray=[];
//     for(let i=0;i<friendName.length;i++){
//         const element=friendName[i];
//         if(element.length % 2!=0){
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// const friendName=['namin','romib','samu','emus','tanjib'];
// console.log(friendNew(friendName))


// const number=[2,3,4,5,6];
// let sum=0;

// for(let i=0;i<number.length;i++){
//     const element=number[i];
//     const square=Math.pow(element,2);
//     sum=sum+square;
//     const avg=sum/number.length;
//     console.log(element,square,sum,avg);
//     console.log(avg)
// }
// const sqrNum=number=>{
//     let sum=0;
//     let avg;
// for(let i=0;i<number.length;i++){
//     const element=number[i];
//     const square=Math.pow(element,2);
//     sum=sum+square;
//     avg=sum/number.length;
    
// }
// return avg;
// }
// const number=[20,30,40,50];
// console.log(sqrNum(number));
// const combineArray=(firArr,secArr)=>{
//     const newArray=[...firArr,...secArr];
//     const maxi=Math.max(...newArray);
//     return maxi; 
// }
// const fir=[2,3,4,5];
// const sec=[6,7,8,9];
// console.log(combineArray(fir,sec));
// const division= (num1, num2) => console.log(num1 /num2)
// division(4,2)
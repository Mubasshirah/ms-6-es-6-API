// let firstObj={name:'ali',age:20};
// let secondObj=firstObj;
// console.log(firstObj,secondObj);
// // secondObj={name:'kali',age:30};
// console.log(firstObj,secondObj)
// secondObj.age=400;
// console.log(firstObj,secondObj);

// function count(){
//     let counting=0;
//     return function(){
//         counting++;
//         return counting;
//     }
// }

// const count1=count();
// console.log(count1())
// console.log(count1())
// console.log(count1())
// console.log(count1())
// console.log(count1())
// const count2=count();
// console.log(count2());
// console.log(count2());
// console.log(count2());
// console.log(count2());
// console.log(count2());


// function sum(a,b,c){
//     console.log(arguments);
//     const result=a+b+c;
//     return result;
// }
// const sum2=sum(1,2,3);
// console.log(sum2);
// const sum1=sum(1,2,3,4,5,6);
// console.log(sum1);

// const num11=5;
// const num22=7;
// function multiply(num1,num2){
//     num1=10;
//     const result=num1*num2;
//     return result;
// }
// console.log(multiply(num11,num22));
// console.log(num11,num22)

// const stu1={name:'adiba',age:30};
// const stu2={name:'tanjib',age:40};
// function couple(first,second){
//  first.name="mubasshirah";
//  second.age=100;
// }
// console.log(stu1,stu2);
// couple(stu1,stu2);
// console.log(stu1,stu2)

// const para='kamil';
// console.log(isNaN(para))

// let falsyValue=undefined;
// if(falsyValue){
//     console.log('value is true')
// }
// else{
//     console.log('value is false')
// }

// const operation=(a,b,c)=>{
//     if(c==='add'){
//         return a+b;
    
//     }
//     else if(c==='subtract'){
//         return a-b;
//     }
//     else if(c==='devide'){
//         return a/b
//     }
//     else{
//         return 'invalid';
//     }
// }
// console.log(operation(2,3,'devide'));
// let p='Javascript'; 
// p='React'; 
// let q=p; 
// // console.log(q); 
// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32));

const strArr=['adiba','adib','adi'];
console.log(strArr.map(data=>data.slice()))

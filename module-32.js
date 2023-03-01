// const myFriendsInfo=[
// {name:'aslam',age:20,assress:'dhaka'},
// {name:'slam',age:2,assress:{
//     road:1,
//     block:'c',
//     house:50
// }

// },
// {name:'asla',age:40,assress:'dhak'},
// ];
// console.log(myFriendsInfo[1]?.assress?.house);

// const numbers=[2,3,4,5,6,7];
// let double=[];
// for(const number of numbers){
//     const doubleNum=number*2;
//     double.push(doubleNum);
// }
// console.log(double)
// const makeDouble=numbers.map(num=>num*2);
// console.log(makeDouble)

// const friends=['asim','gasim','samuni','famunipa']
// const firstLetter=friends.map(friend=>friend[0]);
// console.log(firstLetter)
// const friendLength=friends.map(friend=>friend.length);
// console.log(friendLength)
// const products=[
//     {id:1,name:'laptop',price:104000},
//     {id:2,name:'mobile',price:130000},
//     {id:3,name:'watch',price:120000},
//     {id:4,name:'airpod',price:100400},
// ]
// const totalProductPrice=products.map(product=>product.price)
// console.log(totalProductPrice)
// products.forEach(product=>console.log(product.price));
// const expensive=products.filter(product=>product.price>120000);
// console.log(expensive)
// const productName=products.filter(product=>product.name==='airpod');
// console.log(productName)

// const fives=[5,14,15,20,25,33]
// const divisible=fives.find(five=>five%5===0);
// console.log(divisible)
// const numbers=[1,2,3,4,5]

// const sum=numbers.reduce((prev,curr)=>prev+curr,0);
// console.log(sum);

// const products=[
//         {id:1,name:'laptop',price:104000},
//         {id:2,name:'mobile',price:130000},
//         {id:3,name:'watch',price:120000},
//         {id:4,name:'airpod',price:100400},
//     ]
//     const single=products[0]['name'];
//     const proName='name';
//     const single1=products[0][proName];
//     console.log(single)

// class instructor{
//     name;
//     team='web team'
//     designation='instructor'
//     location;
//     constructor(name,location){
//         this.name=name;
//         this.location=location;
//     }
//     startSession(time){
//         console.log(`start session at ${time}`);
//     }

// }
// const first=new instructor('adiba','dhaka');
// console.log(first);
// first.startSession(9.00);
// const second=new instructor('tanjib','america');
// console.log(second)
// second.startSession(11);

// const peoples=[
//     {name:'adi',age:20},
//     {name:'adib',age:15},
//     {name:'adia',age:22}
// ]
// let ageTOtal=0;
// for(const people of peoples){
//     const singleAge=people.age;
//     ageTOtal=ageTOtal+singleAge;
// }
// console.log(ageTOtal)

// const singleAge=peoples.map(people=>people.age);
// const totalAge=singleAge.reduce((prev,curr)=>(prev+curr),0);
// console.log(totalAge)

// let a=[1,2,3,4,5]
// let b=[];
// a=b;
// console.log(a)
// a.length=0;
// console.log(a)
// while(a.length > 0) {
//     a.pop();
// }
// console.log(a)

// const numbers=[3,2,4,33,53,55,36,63,59,161,44,64];
// const newNumber=numbers.filter(number=>number%2);
// console.log(newNumber)

const friendNAme=[
    {
    name:'adib',
    age:22,
    adress:'dhaka'
},
    {
    name:'adia',
    age:23,
    adress:'rangpur'
},
    {
    name:'adiba',
    age:24,
    adress:'rajsahi'
}
]
// const {name,age,adress}=friendNAme[2];
// console.log(adress,name,age)
const pro1=friendNAme[0]['name'];
// console.log(pro1)
const [one,two,three]=friendNAme;
console.log(three)
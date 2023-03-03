// const shop={
//     name:'classy',
//     product:['mac','laptop','mobile'],
//     adress:{
//         house:'50/2',
//         road:'1/2'
//     },
//     isOpen:true,
//     isNew:false,
// }
// console.log(shop);
// const shopStingify=JSON.stringify(shop);
// console.log(shopStingify)

// const shopParse=JSON.parse(shopStingify);
// console.log(shopParse)

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

// function loadData1(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => showData(users))
// }
// function showData(users){
//     console.log(users);
//     for(const user of users){
//         console.log(user.name)
//         const ul=document.getElementById('userDiv');
//         const li=document.createElement('li');
//         li.innerText=user.name;
//         ul.appendChild(li);
//     }
// }

// function loadPost(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>showPost(data))
// }
// function showPost(posts){
//     console.log(posts);
//     const postContainer=document.getElementById('post-container');
//     for(const post of posts){
//         console.log(post);
//         const div=document.createElement('div');
//         div.innerHTML=`
//         <h5>User ID: ${post.id}</h5>
//         <h4>User Name: ${post.name}</h4>
//         <p>User Email: ${post.email}</p>
//         `;
//         postContainer.appendChild(div);
//         div.classList.add('post-style');
//     }
// }
// loadPost();
// const stuInfo = ({ name: "James", roll: 3 }); 
// console.log(stuInfo.name); 
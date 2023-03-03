// const loadPhone=async(searchText,dataLimit)=>{
//     const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//     const res=await fetch(url);
//     const data=await res.json();
//    showData(data.data,dataLimit);
// }
// const showData=(phones,dataLimit)=>{
//     console.log(phones,dataLimit);
//     const phoneShowsec=document.getElementById('phoneSwoedSection');
//     phoneShowsec.innerText='';
//     const showAll=document.getElementById('showAllBtnSec');
//     if(dataLimit && phones.length>10){
//         phones=phones.slice(0,10);
//         showAll.classList.remove('d-none');
//     }
//     else{
//         showAll.classList.add('d-none');
//     }


//     const messageDiv=document.getElementById('noFOundMsg');
//     if(phones.length===0){
//         messageDiv.classList.remove('d-none');
//     }
//     else{
//         messageDiv.classList.add('d-none');
//     }
//     phones.forEach(phone => {
//         console.log(phone);
//     const phoneDiv=document.createElement('div');
//     phoneDiv.classList.add('col');
//     phoneDiv.innerHTML=`
//     <div class="card">
//     <img src="${phone.image}" class="card-img-top w-75 mx-auto py-3" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${phone.phone_name}</h5>
//       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       <button type="button" onclick="loadSinglePhoneData('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     See Details
//   </button>
//     </div>
//   </div>
//     `;  
//     phoneShowsec.appendChild(phoneDiv);
//     })
    
    
//     togglespinner(false);
// }
// const togglespinner=(isLoading)=>{
//     const toggleField=document.getElementById('toggleSpinner');
//     if(isLoading){
//         toggleField.classList.remove('d-none');
    
//     }
//     else{
//         toggleField.classList.add('d-none');
//     }
// }
// const showAllBtnActivation=(dataLimit)=>{
    
//     togglespinner(true);
//     const inputSearch=document.getElementById('searchInput');
//     const searchInputField=inputSearch.value;
    
//     loadPhone(searchInputField,dataLimit);
//     // inputSearch.value='';
// }
// document.getElementById('searchButton').addEventListener('click',function(){
//     showAllBtnActivation(10);
// })



// document.getElementById('showAllBtn').addEventListener('click',function(){
//     showAllBtnActivation();
// })
// document.getElementById('searchInput').addEventListener('keypress',function(event){
//     if(event.key==='Enter'){
//         showAllBtnActivation(10);
//     }
// })

// const loadSinglePhoneData=async(id)=>{
//     const url=`https://openapi.programming-hero.com/api/phone/${id}`;
//     const res= await fetch(url);
//     const data=await res.json();
//     showSinglephoneData(data.data);
// }
// const showSinglephoneData=(singlePhone)=>{
//     console.log(singlePhone);
//     const modalTitle=document.getElementById('exampleModalLabel');
//     modalTitle.innerText=`${singlePhone.name}`;
//     const modalBody=document.getElementById('exampleModalBody');
//     modalBody.innerHTML=`<img class="w-75 mx-auto" src="${singlePhone.image}">
//     <p>Release Date:${singlePhone.releaseDate? singlePhone.releaseDate : 'not found'}</p>
//     <p>Main Features:${singlePhone.mainFeatures.sensors.map(sensor=>sensor)    }</p>

//     `;
// }



// loadPhone('apple',10);



const person = [
    {
     name: "rahim",
     age: 22,
     friends: ["rahim,karim,jabbar"],
    },
    {
     name: "rahim2",
     age: 22,
     friends: ["rahim,karim,jabbar"],
    },
    {
    name: "rahim3",
    age: 22,
    friends: ["rahim,karim,jabbar"],
   },
   ];
   console.log(person.slice(1,2));
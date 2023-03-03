// const loadQuote= ()=>{
//     fetch('https://api.kanye.rest/')
//     .then(res=>res.json())
//     .then(data=>showQuote(data))
// }
// const showQuote=quote=>{
//     console.log(quote)
//     const showed=document.getElementById('quote-container');
//     showed.innerText=quote.quote

// }
// loadQuote();

// const loadUser=()=>{
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res=>res.json())
//     .then(data=>showUser(data))
// }
// const showUser=user=>{
//     console.log(user.results[0]);
//     const getUser=document.getElementById('random-div');
//     const newDiv=document.createElement('div');
//     newDiv.innerHTML=`
//     <h1> New Name: ${user.results[0].name.last}  ${user.results[0].name.first}</h1>
//     </img>${user.results[0].picture.medium}
//     `;
//     getUser.appendChild(newDiv);
// }
// loadUser()
// const loadCountry=()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>showCountry(data))
// }
// const showCountry=(countries)=>{
//     console.log(countries);
//     countries.forEach(country => {
//         console.log(country)
//         const countryDiv=document.getElementById('country-div');
//         const newDiv=document.createElement('div');
//         newDiv.classList.add('country');
//         newDiv.innerHTML=`
//         <h1>Name:${country.name.common}</h1>
//         <h2>capital:${country.capital?country.capital[0]:'no capital'}</h2>
//         <button onclick="moreInfo('${country.cca2}')">Details</button>
//         `;
//         countryDiv.appendChild(newDiv);
//     });
// }
// const moreInfo=(code)=>{
//     const url=`https://restcountries.com/v3.1/alpha/${code}`
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>showInfo(data))
// }
// const showInfo=(country)=>{
// console.log(country);
// const singleCountryDiv=document.getElementById('countryDetail');
// const singleCountry=document.createElement('div');
// singleCountry.innerHTML=`
// <h5>capital:${country[0].capital ? country[0].capital[0] : 'no capital'}</h5>
// <img src="${country[0].flags.png}" alt="">
// `;
// singleCountryDiv.appendChild(singleCountry);
// }
// loadCountry()

// const loadMealData=(keyword)=>{
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
//     .then(res=>res.json())
//     .then(data=>showMealData(data))
// }
// const showMealData=(meals)=>{
// console.log(meals);
// const mealContainer=document.getElementById('meal-container');
// mealContainer.innerHTML='';
// meals.meals.forEach(meal =>{
//     console.log(meal);
//     const newDiv=document.createElement('div');
//     newDiv.classList.add('col');
//     newDiv.innerHTML=`
//     <div class="card">
//       <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${meal.strMeal}</h5>
//         <p class="card-text">This is a longer card supporting text below as a natural lead- additional content. This content is a littl longer.</p>
//         <button type="button" class="btn btn-primary" onclick="modalBtnDetails(${meal.idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Details
//   </button>
//       </div>
//     `;
//     mealContainer.appendChild(newDiv);
// })
// }
// const btnClick=()=>{
//     console.log('btn click')
//     const inputText=document.getElementById('searchInput').value;
//     loadMealData(inputText);
// }
// const modalBtnDetails=(mealid)=>{
// console.log(mealid)
// fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
// .then(res=>res.json())
// .then(data=>showDetailsModal(data.meals[0]));
// }
// const showDetailsModal=(mealDetail)=>{
// document.getElementById('exampleModalLabel').innerText=mealDetail.strMeal;
// document.getElementById('modalBody').innerHTML=`
// <img class="img-fluid" src="${mealDetail.strMealThumb}">
// `;
// }

// loadMealData('rice');
const loadData=(city)=>{
    const api_key=`da37abb1da2d4b088020237d0e7f6b79`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(res=>res.json())
    .then(data=>showData(data))
}
const showData=(data)=>{
    console.log(data)
    displayTempData('placeName',data.name);
    displayTempData('temperature',data.main.temp)
    displayTempData('condition',data.weather[0].main);
}
const displayTempData=(id,text)=>{
    const dataId=document.getElementById(id);
    dataId.innerText=text;
}
document.getElementById('searchBtn').addEventListener('click',function(){
    const searchInput=document.getElementById('searchInput');
    const inputedCity=searchInput.value;
    loadData(inputedCity);
})
loadData('dhaka');
const api_key='cff679c6bf4b46c8b34c617055146090';
const loadData=()=>{
    const url=`https://newsapi.org/v2/everything?q=tesla&from=2023-02-08&sortBy=publishedAt& ${api_key}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
}
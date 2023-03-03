const loadWord=()=>{
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
.then(res=>res.json())
.then(data=>showData(data))
}
const showData=(word)=>{
    

}
loadWord()
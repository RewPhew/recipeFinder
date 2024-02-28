btn.addEventListener("click",()=>{
    const inputElement = document.getElementById('searchR');
    searchR = inputElement.value;
async function logRecipes(){
    const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${searchR}`)
    const recipes = await response.json();
    console.log(recipes)
}});

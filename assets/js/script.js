// Getting Necessary Variables 

let inputBox = document.getElementById('search');
let btn = document.getElementById('search-btn');
let mealContainer = document.getElementById('meal-container');
let ingredientContainer = document.getElementById('ingredient-container')

// Adding Event Handler to the search button 
btn.addEventListener('click', function () {
    let meal = inputBox.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(response => response.json())
        .then(data => {
            let mealInfo = data.meals;
            mealContainer.innerHTML = "";
            for (let i = 0; i <= mealInfo.length; i++) {
                let mealElement = mealInfo[i];
                let mealBlock = document.createElement('div');
                mealBlock.classList.add("col-md-3");
                mealBlock.innerHTML = `<div class="meal-block" onclick="getMealIngredients(${mealElement.idMeal})">
                                <img src="${mealElement.strMealThumb}" alt="" class="img-fluid">
                                <h5>${mealElement.strMeal}</h5>
                            </div>`;
                mealContainer.appendChild(mealBlock);
            }
        })
});

// Get meal ingredients 
function getMealIngredients(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            let renderedInfo = data.meals[0];
            console.log(renderedInfo);
            let ingredientBlock = document.createElement('div');
            ingredientBlock.classList.add("ingredient-block");
            ingredientBlock.innerHTML = ` <h3> Ingredient List for ${renderedInfo.strMeal}</h3>
                                        <ul>
                                            <li>${renderedInfo.strIngredient1}</li>
                                            <li>${renderedInfo.strIngredient2}</li>
                                            <li>${renderedInfo.strIngredient3}</li>
                                            <li>${renderedInfo.strIngredient4}</li>
                                        </ul>`;
            ingredientContainer.innerHTML = "";
            ingredientContainer.appendChild(ingredientBlock);
        })
}
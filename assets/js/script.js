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
            console.log(data);
            if(data.meals == null){
                alert("Nothing Found")
            }
            let mealInfo = data.meals;
            mealContainer.innerHTML = "";
            ingredientContainer.innerHTML = "";
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
            
        ingredientContainer.innerHTML = "";
            let renderedInfo = data.meals[0];
            console.log(renderedInfo);
            let ingredientBlock = document.createElement('div');
            ingredientBlock.classList.add("ingredient-block");
            ingredientBlock.innerHTML = ` <h3> Ingredient List for ${renderedInfo.strMeal}</h3>
                                        <img src="${renderedInfo.strMealThumb}" class="img-fluid">
                                        <ul id="list-container" class="mt-3">
                                            <li>${renderedInfo.strIngredient1}</li>
                                            <li>${renderedInfo.strIngredient2}</li>
                                            <li>${renderedInfo.strIngredient3}</li>
                                            <li>${renderedInfo.strIngredient4}</li>
                                            <li>${renderedInfo.strIngredient5}</li>
                                            <li>${renderedInfo.strIngredient6}</li>
                                            <li>${renderedInfo.strIngredient7}</li>
                                            <li>${renderedInfo.strIngredient8}</li>
                                            <li>${renderedInfo.strIngredient9}</li>
                                            <li>${renderedInfo.strIngredient10}</li>
                                            <li>${renderedInfo.strIngredient11}</li>
                                            <li>${renderedInfo.strIngredient12}</li>
                                            <li>${renderedInfo.strIngredient13}</li>
                                            <li>${renderedInfo.strIngredient14}</li>
                                            <li>${renderedInfo.strIngredient15}</li>
                                            <li>${renderedInfo.strIngredient16}</li>
                                            <li>${renderedInfo.strIngredient17}</li>
                                            <li>${renderedInfo.strIngredient18}</li>
                                            <li>${renderedInfo.strIngredient19}</li>
                                            <li>${renderedInfo.strIngredient20}</li>
                                            <li>${renderedInfo.strIngredient21}</li>
                                            <li>${renderedInfo.strIngredient22}</li>
                                            <li>${renderedInfo.strIngredient23}</li>
                                            <li>${renderedInfo.strIngredient24}</li>
                                            <li>${renderedInfo.strIngredient25}</li>
                                            <li>${renderedInfo.strIngredient26}</li>
                                            <li>${renderedInfo.strIngredient27}</li>
                                            <li>${renderedInfo.strIngredient28}</li>
                                            <li>${renderedInfo.strIngredient29}</li>
                                            <li>${renderedInfo.strIngredient30}</li>
                                        </ul>`;
            ingredientContainer.appendChild(ingredientBlock);

            // If the List item is empty it will be hidden 

            let li = document.getElementById('list-container').childNodes;
            let nodeListLength = li.length;
            for (j = 0; j <= nodeListLength;j++){
                let elem = li[j+1];
                if(elem.textContent == "" || elem.textContent == "undefined" || elem.textContent == "null"){
                    elem.style.display = "none";
                }
            }

            // for(j = 1; j <= 15; j++){
            //     let property = 'strIngredient' + j;;
            //     console.log(property)
            //     let ingredient = renderedInfo.property;
            //     console.log(ingredient)
            //     if(ingredient != ""){
            //         let singleIngredient = document.createElement('li');
            //         singleIngredient.innerText = ingredient;
            //         document.getElementsByTagName('ul')[1].appendChild(singleIngredient);
            //     }
            // }
        })
}
const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsEl = document.querySelector("#ingredients");

const createIngredients = function (ingredients) {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("item");

    return liEl;
  });
};

const liElements = createIngredients(ingredients);

ingredientsEl.append(...liElements);

const countCategorys = document.querySelectorAll("#categories .item").length;
console.log("Number of categories:", countCategorys);

const categoriesEl = document.querySelectorAll("#categories .item");

categoriesEl.forEach(function (category) {
  console.log("Category:", category.firstElementChild.textContent);

  console.log("Elements:", category.querySelectorAll("ul li").length);
});

const numOfCategories = document.querySelectorAll("li.item");

console.log(`Number of categories: ${numOfCategories.length}`);

numOfCategories.forEach(function (element) {
  console.log(`Category: ${element.childNodes[1].textContent}`);
  console.log(`Elements: ${element.childNodes[3].children.length}`);
});

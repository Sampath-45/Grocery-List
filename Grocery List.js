let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerEl = document.getElementById("groceryListContainer");
groceryListContainerEl.classList.add("bgContainer");

let headEl = document.createElement("h1");
headEl.textContent = "Grocery List";
headEl.classList.add("head");
groceryListContainerEl.appendChild(headEl);

let listItemsContainerEl = document.createElement("ul");
listItemsContainerEl.classList.add("listItems-Container");
groceryListContainerEl.appendChild(listItemsContainerEl);

for (let listItem of groceryList) {
    let listItelEl = document.createElement("li");
    listItelEl.textContent = listItem;
    listItemsContainerEl.appendChild(listItelEl);
}


const recipes = [
    { name: "Dragon Roll Deluxe", 
        price: "$12", 
        description: "(Shrimp tempura, avocado, cucumber, topped with eel and spicy mayo.)"},
    { name: "Rainbow Sushi Platter", 
        price: "$13", 
        description: "(California roll topped with assorted fresh sashimi.)"},
    { name: "Spicy Tuna Combo",
        price: "$10",
        description: "(Spicy tuna roll served with a side of miso soup.)" },
    { name: "California Roll Plate",
        price: "$8", 
        description: "(Classic California roll with fresh crab and avocado, served with pickled ginger.)" },
    { name: "Philadelphia Duo", 
        price: "$11", 
        description: "(Two Philadelphia rolls with smoked salmon, cream cheese, and cucumber.)" },
    { name: "Tempura Roll Set", 
        price: "$10", 
        description: "(Shrimp tempura roll served with vegetable tempura on the side.)" },
    { name: "Salmon Avocado Delight", 
        price: "$9", 
        description: "(Fresh salmon and creamy avocado roll with a side of edamame.)" },
    { name: "Eel & Cucumber Platter", 
        price: "$10", 
        description: "(Grilled eel and cucumber roll served with eel sauce and a salad.)" },
    { name: "Vegetarian Feast", 
        price: "$7", 
        description: "(Avocado, cucumber, carrot, and pickled radish roll with a side of seaweed salad.)" },
    { name: "Yellowtail Special", 
        price: "$11", 
        description: "(Yellowtail and scallion roll served with a small sashimi sampler.)" },
];

function createRecipes(content) {
    const ulList = document.createElement("ul");

    recipes.forEach(recipes => {
        const listItem = document.createElement("li");
        const divContainer = document.createElement("div");
        const headerContainer = document.createElement("div");
        const title = document.createElement("h3");
        const price = document.createElement("p");
        const description = document.createElement("p");

        ulList.appendChild(listItem);
        listItem.appendChild(divContainer)
        divContainer.appendChild(headerContainer);
        divContainer.classList.add("title-container");
        headerContainer.appendChild(title);
        headerContainer.appendChild(description);
        title.textContent = `${recipes.name}`;
        price.textContent = `${recipes.price}`;
        description.textContent = `${recipes.description}`;
        divContainer.appendChild(price);
    });
    content.appendChild(ulList);
}

export {createRecipes}
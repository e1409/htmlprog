let order = {
    soup: null,
    main: null,
    drink: null,
    salad: null,
    dessert: null,
};

function addToOrder(meal) {
    order[meal.category] = meal;
    updateOrderDisplay();
}

function updateOrderDisplay() {
    const orderSummary = document.getElementById("order-summary");
    orderSummary.innerHTML = "";

    let totalCost = 0;
    let isOrderEmpty = true;

    for (const [category, meal] of Object.entries(order)) {
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = getCategoryTitle(category);
        orderSummary.appendChild(categoryTitle);

        if (meal) {
            const mealInfo = document.createElement("p");
            mealInfo.textContent = `${meal.name} ${meal.price}₽`;
            orderSummary.appendChild(mealInfo);
            totalCost += meal.price;
            isOrderEmpty = false;
        } else {
            const message = document.createElement("p");
            message.textContent = category === 'drink' ? "Напиток не выбран" : "Блюдо не выбрано";
            orderSummary.appendChild(message);
        }
    }

    if (isOrderEmpty) {
        orderSummary.innerHTML = "<p>Ничего не выбрано</p>";
    } else {
        const totalElement = document.createElement("h3");
        totalElement.textContent = "Стоимость заказа";
        orderSummary.appendChild(totalElement);

        const totalCostElement = document.createElement("p");
        totalCostElement.textContent = `${totalCost}₽`;
        orderSummary.appendChild(totalCostElement);
    }
}
function getCategoryTitle(category) {
    switch (category) {
        case "soup":
            return "Суп";
        case "main":
            return "Главное блюдо";
        case "drink":
            return "Напиток";
        case "salad":
            return "Салат";
        case "dessert":
            return "Десерт";
        default:
            return "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const categories = {
        soup: document.getElementById("soup-grid"),
        main: document.getElementById("main-grid"),
        salad: document.getElementById("salad-grid"),
        drink: document.getElementById("drink-grid"),
        dessert: document.getElementById("dessert-grid"),
    };

    function displayMeals(category, filter = null) {
        categories[category].innerHTML = "";

        const filteredMeals = filter
            ? meals.filter(
                (meal) => meal.category === category && meal.kind === filter
            )
            : meals.filter((meal) => meal.category === category);

        filteredMeals.sort((a, b) => a.name.localeCompare(b.name));

        filteredMeals.forEach((meal) => {
            const mealElement = document.createElement("div");
            mealElement.classList.add("meal-item");
            mealElement.innerHTML = `
                <img src="${meal.image}" alt="${meal.name}">
                <p class="meal-name">${meal.name}</p>
                <p class="meal-price">Цена: ${meal.price}₽</p>
                <button>Добавить</button>
            `;
            mealElement
                .querySelector("button")
                .addEventListener("click", () => addToOrder(meal));
            categories[category].appendChild(mealElement);
        });
    }

    Object.keys(categories).forEach((category) => displayMeals(category));

    document.querySelectorAll(".filters button").forEach((button) => {
        button.addEventListener("click", function () {
            const categorySection = this.closest("section")
                .querySelector(".meals-grid")
                .id.split("-")[0];
            const kind = this.getAttribute("data-kind");

            this.classList.toggle("active");

            if (this.classList.contains("active")) {

                this.closest(".filters")
                    .querySelectorAll("button")
                    .forEach((btn) => {
                        if (btn !== this) btn.classList.remove("active");
                    });

                displayMeals(categorySection, kind);
            } else {
                displayMeals(categorySection);
            }
        });
    });

    const resetButton = document.getElementById("reset-order");
    resetButton.addEventListener("click", () => {
        order = {
            soup: null,
            main: null,
            drink: null,
            salad: null,
            dessert: null,
        };
        updateOrderDisplay();
    });
});

export { order };

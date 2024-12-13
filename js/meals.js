const meals = [
    // Супы
    { keyword: "chicken", name: "Куриный суп", price: 200, category: "soup", kind: "meat", count: "450мл", image: "pictures/куриныйсуп.png" },
    { keyword: "peas", name: "Гороховый суп", price: 270, category: "soup", kind: "veg", count: "350мл", image: "pictures/гороховыйсуп.png" },
    { keyword: "vegetable", name: "Овощной суп", price: 190, category: "soup", kind: "veg", count: "400мл", image: "pictures/овощнойсуп.png" },
    { keyword: "fishsup", name: "Рыбный суп", price: 300, category: "soup", kind: "fish", count: "400мл", image: "pictures/рыбныйсуп.png" },
    { keyword: "mushroom", name: "Грибной суп-пюре", price: 270, category: "soup", kind: "meat", count: "350мл", image: "pictures/грибнойсуппюре.png" },
    { keyword: "tomsup", name: "Том ям", price: 360, category: "soup", kind: "fish", count: "400мл", image: "pictures/томям.png" },

    // Главное блюдо
    { keyword: "broccoli", name: "Брокколи", price: 300, category: "main", kind: "veg", count: "350г", image: "pictures/брокколи.png" },
    { keyword: "baconandeggs", name: "Яичница с беконом", price: 275, category: "main", kind: "meat", count: "300г", image: "pictures/яичницасбеконом.png" },
    { keyword: "spaghetti", name: "Спагетти", price: 300, category: "main", kind: "veg", count: "350г", image: "pictures/спагетти.png" },
    { keyword: "bigpancakes", name: "Блинчики", price: 250, category: "main", kind: "veg", count: "320г", image: "pictures/блинчики.png" },
    { keyword: "pancakes", name: "Панкейки", price: 230, category: "main", kind: "veg", count: "300г", image: "pictures/панкейки.png" },
    { keyword: "friedfish", name: "Жареная рыба", price: 370, category: "main", kind: "fish", count: "370г", image: "pictures/жаренаярыба.png" },

    // Салаты
    { keyword: "vegetablesalad", name: "Овощной салат", price: 290, category: "salad", kind: "veg", count: "250г", image: "pictures/овощнойсалат.png" },
    { keyword: "meatsalad", name: "Мясной салат", price: 330, category: "salad", kind: "meat", count: "200г", image: "pictures/мяснойсалат.png" },
    { keyword: "caesar", name: "Цезарь", price: 210, category: "salad", kind: "meat", count: "300г", image: "pictures/салатцезарь.png" },
    { keyword: "romesalad", name: "Римский салат", price: 290, category: "salad", kind: "meat", count: "250г", image: "pictures/римскийчалат.png" },
    { keyword: "fruitsalad", name: "Фруктовый салат", price: 300, category: "salad", kind: "veg", count: "170г", image: "pictures/фруктовыйсалат.png" },
    { keyword: "fishsalad", name: "Салат с морепродуктами", price: 400, category: "salad", kind: "fish", count: "200г", image: "pictures/рыбныйсалат.png" },

    // Десерты
    { keyword: "prague", name: "Прага", price: 270, category: "dessert", kind: "medium", count: "150г", image: "pictures/прага.png" },
    { keyword: "raspberrymousse", name: "Малиновый мусс", price: 280, category: "dessert", kind: "medium", count: "150г", image: "pictures/малиновыймусс.png" },
    { keyword: "napoleon", name: "Наполеон", price: 270, category: "dessert", kind: "medium", count: "150г", image: "pictures/наполеон.png" },
    { keyword: "icecream", name: "Мороженое", price: 260, category: "dessert", kind: "medium", count: "150г", image: "pictures/мороженое.png" },
    { keyword: "macaron", name: "Макароны", price: 250, category: "dessert", kind: "small", count: "90г", image: "pictures/макарон.png" },
    { keyword: "pies", name: "Пироженки", price: 400, category: "dessert", kind: "large", count: "300г", image: "pictures/пироженки.png" },

    // Напитки
    { keyword: "pinktea", name: "Розовый чай", price: 350, category: "drink", kind: "hot", count: "300мл", image: "pictures/розовыйчай.png" },
    { keyword: "fruittea", name: "Зеленый чай", price: 350, category: "drink", kind: "hot", count: "300мл", image: "pictures/зеленыйчай.png" },
    { keyword: "greentea", name: "Фруктовый чай", price: 350, category: "drink", kind: "hot", count: "300мл", image: "pictures/фруктовыйчай.png" },
    { keyword: "blacktea", name: "Черный чай", price: 350, category: "drink", kind: "hot", count: "350мл", image: "pictures/черныйчай.png" },
    { keyword: "milkcocktail", name: "Молочный коклейль", price: 270, category: "drink", kind: "cold", count: "250мл", image: "pictures/молочныйкоклейль.png" },
    { keyword: "bubbletea", name: "Баббл ти", price: 280, category: "drink", kind: "cold", count: "300мл", image: "pictures/бабблтиа.png" },
];
const products = [
  {
    name: "Caramel Chocolate Coffee",
    price: 59.9,
    image: "coffee_01",
    categoryId: 1,
  },
  {
    name: "Large Cold Chocolate Coffee",
    price: 49.9,
    image: "coffee_02",
    categoryId: 1,
  },
  {
    name: "Large Cold Chocolate Latte",
    price: 54.9,
    image: "coffee_03",
    categoryId: 1,
  },
  {
    name: "Large Cold Chocolate Latte",
    price: 54.9,
    image: "coffee_04",
    categoryId: 1,
  },
  {
    name: "Large Cold Chocolate Milkshake",
    price: 54.9,
    image: "coffee_05",
    categoryId: 1,
  },
  {
    name: "Small Hot Mocha Coffee",
    price: 39.9,
    image: "coffee_06",
    categoryId: 1,
  },
  {
    name: "Large Hot Chocolate Mocha Coffee",
    price: 59.9,
    image: "coffee_07",
    categoryId: 1,
  },
  {
    name: "Large Hot Cappuccino Coffee",
    price: 59.9,
    image: "coffee_08",
    categoryId: 1,
  },
  {
    name: "Medium Hot Mocha Coffee",
    price: 49.9,
    image: "coffee_09",
    categoryId: 1,
  },
  {
    name: "Medium Cold Caramel Mocha Coffee",
    price: 49.9,
    image: "coffee_10",
    categoryId: 1,
  },
  {
    name: "Medium Cold Chocolate Mocha Coffee",
    price: 49.9,
    image: "coffee_11",
    categoryId: 1,
  },
  {
    name: "Espresso Coffee",
    price: 29.9,
    image: "coffee_12",
    categoryId: 1,
  },
  {
    name: "Large Caramel Cappuccino Coffee",
    price: 59.9,
    image: "coffee_13",
    categoryId: 1,
  },
  {
    name: "Large Caramel Coffee",
    price: 59.9,
    image: "coffee_14",
    categoryId: 1,
  },
  {
    name: "Pack of 3 Chocolate Donuts",
    price: 39.9,
    image: "donuts_01",
    categoryId: 4,
  },
  {
    name: "Pack of 3 Glazed Donuts",
    price: 39.9,
    image: "donuts_02",
    categoryId: 4,
  },
  {
    name: "Strawberry Donut",
    price: 19.9,
    image: "donuts_03",
    categoryId: 4,
  },
  {
    name: "Chocolate Chip Cookie Donut",
    price: 19.9,
    image: "donuts_04",
    categoryId: 4,
  },
  {
    name: "Strawberry Flavored Sprinkle Donut",
    price: 19.9,
    image: "donuts_05",
    categoryId: 4,
  },
  {
    name: "Chocolate Glaze Donut",
    price: 19.9,
    image: "donuts_06",
    categoryId: 4,
  },
  {
    name: "Chocolate on Chocolate Donut",
    price: 19.9,
    image: "donuts_07",
    categoryId: 4,
  },
  {
    name: "Pack of 3 Chocolate Donuts",
    price: 39.9,
    image: "donuts_08",
    categoryId: 4,
  },
  {
    name: "Pack of 3 Vanilla and Chocolate Donuts",
    price: 39.9,
    image: "donuts_09",
    categoryId: 4,
  },
  {
    name: "Pack of 6 Donuts",
    price: 69.9,
    image: "donuts_10",
    categoryId: 4,
  },
  {
    name: "Pack of 3 Assorted Donuts",
    price: 39.9,
    image: "donuts_11",
    categoryId: 4,
  },
  {
    name: "Chocolate Glaze Donut",
    price: 19.9,
    image: "donuts_12",
    categoryId: 4,
  },
  {
    name: "Pack of 3 Chocolate Chip Donuts",
    price: 39.9,
    image: "donuts_13",
    categoryId: 4,
  },
  {
    name: "Chocolate and Coconut Donut",
    price: 19.9,
    image: "donuts_14",
    categoryId: 4,
  },
  {
    name: "Chocolate Chip Cookies Pack",
    price: 29.9,
    image: "cookies_01",
    categoryId: 6,
  },
  {
    name: "Chocolate and Oat Cookies Pack",
    price: 39.9,
    image: "cookies_02",
    categoryId: 6,
  },
  {
    name: "Vanilla Muffins Pack",
    price: 39.9,
    image: "cookies_03",
    categoryId: 6,
  },
  {
    name: "Pack of 4 Oat Cookies",
    price: 24.9,
    image: "cookies_04",
    categoryId: 6,
  },
  {
    name: "Assorted Butter Cookies",
    price: 39.9,
    image: "cookies_05",
    categoryId: 6,
  },
  {
    name: "Fruity Flavored Cookies",
    price: 39.9,
    image: "cookies_06",
    categoryId: 6,
  },
  {
    name: "Plain Hamburger",
    price: 59.9,
    image: "hamburgers_01",
    categoryId: 2,
  },
  {
    name: "Chicken Burger",
    price: 59.9,
    image: "hamburgers_02",
    categoryId: 2,
  },
  {
    name: "Chicken and Chili Burger",
    price: 59.9,
    image: "hamburgers_03",
    categoryId: 2,
  },
  {
    name: "Cheese and Pickles Burger",
    price: 59.9,
    image: "hamburgers_04",
    categoryId: 2,
  },
  {
    name: "Quarter Pounder Burger",
    price: 59.9,
    image: "hamburgers_05",
    categoryId: 2,
  },
  {
    name: "Double Cheeseburger",
    price: 69.9,
    image: "hamburgers_06",
    categoryId: 2,
  },
  {
    name: "Special Hot Dog",
    price: 49.9,
    image: "hamburgers_07",
    categoryId: 2,
  },
  {
    name: "2 Hot Dogs Pack",
    price: 69.9,
    image: "hamburgers_08",
    categoryId: 2,
  },
  {
    name: "4 Slices of Cheese Pie",
    price: 69.9,
    image: "cakes_01",
    categoryId: 5,
  },
  {
    name: "Special Waffle",
    price: 49.9,
    image: "cakes_02",
    categoryId: 5,
  },
  {
    name: "House Croissants",
    price: 39.9,
    image: "cakes_03",
    categoryId: 5,
  },
  {
    name: "Cheese Pie",
    price: 19.9,
    image: "cakes_04",
    categoryId: 5,
  },
  {
    name: "Chocolate Cake",
    price: 29.9,
    image: "cakes_05",
    categoryId: 5,
  },
  {
    name: "Slice of Chocolate Cake",
    price: 29.9,
    image: "cakes_06",
    categoryId: 5,
  },
  {
    name: "Spicy Double Cheese Pizza",
    price: 69.9,
    image: "pizzas_01",
    categoryId: 3,
  },
  {
    name: "Ham and Cheese Pizza",
    price: 69.9,
    image: "pizzas_02",
    categoryId: 3,
  },
  {
    name: "Double Cheese Pizza",
    price: 69.9,
    image: "pizzas_03",
    categoryId: 3,
  },
  {
    name: "House Special Pizza",
    price: 69.9,
    image: "pizzas_04",
    categoryId: 3,
  },
  {
    name: "Chorizo Pizza",
    price: 69.9,
    image: "pizzas_05",
    categoryId: 3,
  },
  {
    name: "Hawaiian Pizza",
    price: 69.9,
    image: "pizzas_06",
    categoryId: 3,
  },
  {
    name: "Bacon Pizza",
    price: 69.9,
    image: "pizzas_07",
    categoryId: 3,
  },
  {
    name: "Vegetable and Cheese Pizza",
    price: 69.9,
    image: "pizzas_08",
    categoryId: 3,
  },
  {
    name: "Pepperoni and Cheese Pizza",
    price: 69.9,
    image: "pizzas_09",
    categoryId: 3,
  },
  {
    name: "Olive and Cheese Pizza",
    price: 69.9,
    image: "pizzas_10",
    categoryId: 3,
  },
  {
    name: "Cheese, Ham, and Mushroom Pizza",
    price: 69.9,
    image: "pizzas_11",
    categoryId: 3,
  },
];

export { products };

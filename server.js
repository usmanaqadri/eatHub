require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");

const eatHubController = require("./controllers/cart-control");

// SETUP MONGOOSE
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/eatHub", eatHubController);

// DEFAULT
app.get("/", (req, res) => {
  res.send("you tracking?");
});

// SEED ROUTE

// app.get("/seed", async (req, res) => {
//   const newProducts = [
//     {
//       name: "Double Cheeseburger",
//       desc: "The Double Cheeseburger features two 100% pure all beef patties seasoned with just a pinch of salt and pepper. It's topped with tangy pickles, chopped onions, ketchup, mustard, and two melty American cheese slices.",
//       imgUrl:
//         "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Cheeseburger-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
//       price: 6,
//       rating: 4.5,
//     },
//     {
//       name: "Philly Cheesesteak",
//       desc: "A sandwich made with super thinly sliced ribeye steak, caramelized onion, and provolone cheese. That simple combination is the original classic as made popular on the East Coast.",
//       imgUrl: "https://tipbuzz.com/wp-content/uploads/Philly-Cheesesteak-1.jpg",
//       price: 8,
//       rating: 4.5,
//     },
//     {
//       name: "Sesame Chicken",
//       desc: "A dish commonly found in Chinese restaurants throughout the United States and Canada and is similar to General Tso's chicken but the taste is sweet rather than spicy.",
//       imgUrl:
//         "https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg",
//       price: 12,
//       rating: 5.5,
//     },
//     {
//       name: "Spicy Fried Chicken Sandwich",
//       desc: "This fried chicken sandwich is ultra crispy on the outside, tender & juicy on the inside and bursting with flavour all over!.",
//       imgUrl:
//         "https://somethingaboutsandwiches.com/wp-content/uploads/2021/03/crispy-chicken-sandwich.jpg",
//       price: 7,
//       rating: 5,
//     },
//     {
//       name: "Deep Dish Pizza",
//       desc: "a thick pizza baked in a pan and layered with cheese, fillings like meat and vegetables, and sauce–in that order.",
//       imgUrl:
//         "https://www.thespruceeats.com/thmb/Azfb6CWxzCNTPswGrUDYUEvrAGU=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicago-deep-dish-pizza-pie--141427346-5997aad0af5d3a0011164ed8.jpg",
//       price: 16,
//       rating: 5,
//     },
//     {
//       name: "Butter Chicken",
//       desc: "A classic Indian dish where grilled chicken is simmered in a spicy, aromatic, buttery and creamy tomato gravy.",
//       imgUrl:
//         "https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-27.jpg",
//       price: 17,
//       rating: 4.5,
//     },
//     {
//       name: "Lamb Gyro Platter",
//       desc: "Lamb gyros meat served with a small salad and your choice or rice or fries, and a side of tzatiki.",
//       imgUrl:
//         "https://media-cdn.tripadvisor.com/media/photo-s/10/d6/03/a2/lamb-gyro-platter.jpg",
//       price: 11,
//       rating: 4.5,
//     },
//     {
//       name: "Chicken Shawarma Wrap",
//       desc: "Authentic Chicken Shawarma is cooked by stacking spice-marinated chicken on a vertical spit, like a roaster.",
//       imgUrl:
//         "https://www.lemonblossoms.com/wp-content/uploads/2020/06/Chicken-Shawarma-Recipe-14.jpg",
//       price: 7,
//       rating: 5,
//     },
//   ];

//   try {
//     const seedItems = await MenuItem.create(newProducts);
//     res.send(seedItems);
//   } catch (err) {
//     res.send(err.message);
//   }
// });

app.listen(PORT, () => console.log(`proj 2 on http://localhost:${PORT}`));

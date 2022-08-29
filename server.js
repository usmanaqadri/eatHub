require("dotenv").config();
const express = require("express");
const MenuItem = require("./models/menuItems");
const CartItem = require("./models/cart");
const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require("method-override");

// SETUP MONGOOSE
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shop");
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("you tracking?");
});

// SEED ROUTE

app.get("/seed", async (req, res) => {
  const newProducts = [
    {
      order: "Beans",
      desc: "A small pile of beans. Buy more beans for a big pile of beans.",
      imgUrl:
        "https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2",
      price: 5,
      qty: 99,
    },
    {
      order: "Bones",
      desc: "It's just a bag of bones.",
      imgUrl: "http://bluelips.com/prod_images_large/bones1.jpg",
      price: 25,
      qty: 0,
    },
    {
      order: "Bins",
      desc: "A stack of colorful bins for your beans and bones.",
      imgUrl: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
      price: 7000,
      qty: 1,
    },
  ];

  try {
    const seedItems = await MenuItem.create(newProducts);
    res.send(seedItems);
  } catch (err) {
    res.send(err.message);
  }
});

// INDEX ROUTE

app.get("/eatHub", (req, res) => {
  MenuItem.find({}, (err, items) => {
    if (err) {
      console.log("error", err);
    } else {
      CartItem.find({}, (err, cart) => {
        if (err) {
          console.log("error", err);
        } else {
          res.render("index.ejs", { items, cart });
        }
      });
    }
  });
});

//  NEW ROUTE

app.get("/eatHub/new", (req, res) => {
  MenuItem.find({}, (err, menu) => {
    if (err) {
      console.log("error", err);
    } else {
      res.render("new.ejs", { menu });
    }
  });
});

// CREATE ROUTE
app.post("/eatHub", async ({ body }, res) => {
  console.log(body);
  let { order } = body;
  console.log("this is the order", order);
  console.log("this is the typeof", typeof order);
  if (typeof order === "string") {
    order = [order];
  }
  const newCartItems = [];
  for (let eachItem of order) {
    const item = { name: "", price: null, qty: null };
    eachItem = eachItem.split(";");
    item.name = eachItem[0];
    item.price = Number(eachItem[1]);
    item.qty = 1;
    newCartItems.push(item);
  }
  CartItem.create(newCartItems, (err, data) => {
    if (err) {
      console.log("error", err);
    } else {
      res.redirect("/eatHub");
    }
  });
});

app.listen(port, () => console.log(`proj 2 on http://localhost:${port}`));

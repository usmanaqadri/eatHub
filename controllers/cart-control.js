const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItems");
const CartItem = require("../models/cart");

// INDEX ROUTE

router.get("/", (req, res) => {
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

// SUBMIT ROUTE
router.get("/submit", (req, res) => {
  res.render("submit.ejs");
});

//  NEW ROUTE

router.get("/order", (req, res) => {
  MenuItem.find({}, (err, menu) => {
    if (err) {
      console.log("error", err);
    } else {
      CartItem.find({}, (err, cart) => {
        if (err) {
          console.log("error", err);
        } else {
          res.render("order.ejs", { menu, cart });
        }
      });
    }
  });
});

// SHOW ROUTE

router.get("/:id", (req, res) => {
  MenuItem.findById(req.params.id, (err, item) => {
    if (err) {
      console.log("error", err);
    } else {
      CartItem.find({}, (err, cart) => {
        if (err) {
          console.log("error", err);
        } else {
          res.render("show.ejs", { item, cart });
        }
      });
    }
  });
});

// CREATE ROUTE
router.post("/", ({ body }, res) => {
  if (Object.keys(body).length === 0) {
    res.redirect("/eatHub");
  } else {
    let { order } = body;
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
  }
});

// EDIT ROUTE
router.get("/order/:id/edit", (req, res) => {
  CartItem.findById(req.params.id, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      CartItem.find({}, (err, cart) => {
        if (err) {
          console.log("error", err);
        } else {
          MenuItem.find({}, (err, menu) => {
            if (err) {
              console.log(err);
            } else {
              res.render("edit.ejs", { item, menu, cart });
            }
          });
        }
      });
    }
  });
});

// UPDATE ROUTE
router.put("/", (req, res) => {
  const update = Object.entries(req.body)[0];
  CartItem.findByIdAndUpdate(
    update[0],
    { qty: update[1] },
    { new: true },
    (err, updatedItem) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/eatHub");
      }
    }
  );
});

// DESTROY ROUTES

router.delete("/", (req, res) => {
  CartItem.deleteMany({}, (err, cart) => {
    if (err) {
      console.log("error", err);
    } else {
      res.redirect("/eatHub");
    }
  });
});

router.delete("/order/:id", (req, res) => {
  CartItem.findByIdAndRemove(req.params.id, (err, deletedItem) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/eatHub");
    }
  });
});

module.exports = router;

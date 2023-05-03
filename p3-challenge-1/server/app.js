if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const productRoute = require("./routes/products");
const UserController = require("./controllers/userController");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CREATE USER
app.post("/register", UserController.create);

// LOGIN USER
app.post("/login", UserController.login);

app.use("/products", productRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listen on Port ${port}`);
});

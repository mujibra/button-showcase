const express = require("express");
const ProductController = require("../controllers/productController");
const authentication = require("../middlewares/auth");
const { getAccess } = require("../middlewares/authorization");
const router = express.Router();

// READ PRODUCT
router.get("/", ProductController.list);
router.get("/:id", ProductController.productId);

router.use(authentication);
// CREATE PRODUCT
router.post("/", ProductController.create);

// CATEGORY
router.get("/categories", ProductController.categoryList);
router.post("/categories", ProductController.categoryCreate);
router.delete("/categories/:id", ProductController.deleteCategory);

// GET PRODUCT BY ID

// UPDATE FOOD
router.put("/:id", getAccess, ProductController.editFood);

router.delete("/:id", ProductController.delete);

module.exports = router;

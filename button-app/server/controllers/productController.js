const { User, Product, Category, Image, sequelize } = require("../models");

class FoodController {
  static async list(req, res, next) {
    try {
      let product = await Product.findAll({
        include: [
          {
            model: User,
          },
          {
            model: Category,
          },
          {
            model: Image,
          },
        ],
      });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async categoryList(req, res, next) {
    try {
      let category = await Category.findAll({});
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async categoryCreate(req, res, next) {
    try {
      const { name } = req.body;
      let result = await Category.create({
        name,
      });
      res.status(200).json({
        message: "Success add category",
        newCategory: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    let id = req.params.id;
    try {
      let category = await Category.findByPk(id);
      console.log(category);
      if (category === null) {
        next({ name: "NotFound" });
      } else {
        Category.destroy({
          where: {
            id,
          },
        });
      }
      res.status(200).json({
        message: `${category.name} has been delete`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async productId(req, res, next) {
    try {
      let product = await Product.findOne({
        include: [
          {
            model: User,
          },
          {
            model: Category,
          },
          {
            model: Image,
          },
        ],
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { name, description, price, mainImg, CategoryId, Images } =
        req.body;
      console.log(req.body);
      let result = await Product.create(
        {
          name,
          slug: name.split(" ").join("-"),
          description,
          price,
          mainImg,
          UserId: req.rightUser.id,
          CategoryId,
        },
        { transaction: t }
      );
      Images.map((el) => (el.ProductId = result.id));
      await Image.bulkCreate(Images, { transaction: t });
      await t.commit();
      res.status(200).json({
        message: "Success add product",
        newProduct: result,
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async editFood(req, res, next) {
    try {
      const data = await Product.findByPk(req.params.id);
      if (!data) {
        next({ name: "NotFound" });
      } else {
        const { id } = req.params;
        const { name, description, price, mainImg, CategoryId } = req.body;
        console.log(req.body);
        let update = await Product.update(
          {
            name,
            slug: name.split(" ").join("-"),
            description,
            price,
            mainImg,
            CategoryId,
          },
          {
            where: {
              id,
            },
            returning: true,
          }
        );
        update = update[1][0];
        res.status(200).json({
          message: `Update data with ID ${id} Success`,
          productBefore: data,
          productAfter: update,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    let id = req.params.id;
    try {
      let product = await Product.findByPk(id);
      if (product === null) {
        next({ name: "NotFound" });
      } else {
        Product.destroy({
          where: {
            id,
          },
        });
      }
      res.status(200).json({
        message: `${product.name} has been delete`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FoodController;

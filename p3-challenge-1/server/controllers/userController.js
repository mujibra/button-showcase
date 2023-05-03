const { User } = require("../models");
const { compare } = require("../helpers/bcrypt");
const { payloadToken } = require("../helpers/jwt");

class UserController {
  static async create(req, res, next) {
    try {
      const { email, password, phoneNumber, address } = req.body;
      console.log(req.body);
      const data = await User.create({
        email,
        password,
        role: "Admin",
        phoneNumber,
        address,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const userLogin = await User.findOne({
        where: {
          email,
        },
      });
      if (!userLogin) {
        next({ name: "NotFound" });
      }
      const rightPassword = compare(password, userLogin.password);
      if (!rightPassword) {
        res.status(401).json({ message: "Unauthorized" });
      }
      const payload = {
        id: userLogin.id,
      };
      // Bikin Token
      const token = payloadToken(payload);
      res.status(200).json({
        access_token: token,
        email: userLogin.email,
        role: userLogin.role,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;

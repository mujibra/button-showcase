const { readPayloadToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "Forbidden" };
    }

    const payload = readPayloadToken(access_token);

    let user = await User.findByPk(payload.id);

    if (!user) {
      throw { name: "Invalid email/password" };
    }
    req.rightUser = {
      id: user.id,
      role: user.role,
      email: user.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;

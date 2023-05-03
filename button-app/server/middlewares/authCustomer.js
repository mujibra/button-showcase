const { readPayloadToken } = require("../helpers/jwt");
const { Costumer } = require("../models");

const CustomerAuthentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    const payload = readPayloadToken(access_token);

    let customer = await Costumer.findByPk(payload.id);

    if (!customer) {
      throw { name: "Invalid email/password" };
    }
    req.rightCustomer = {
      id: customer.id,
      username: customer.username,
      email: customer.email,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = CustomerAuthentication;

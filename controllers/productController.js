const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const CreateProducts = async (req, res) => {
	res.send("create a product");
};

const GetProducts = async (req, res) => {
	res.send("get all products");
};

module.exports = { CreateProducts, GetProducts };

const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const CreateProducts = async (req, res) => {
	console.log(req.body);
	const new_product = await Product.create(req.body);
	res.status(StatusCodes.CREATED).json({ product: new_product });

	// res.send("create a product");
};

const GetProducts = async (req, res) => {
	res.send("get all products");
};

module.exports = { CreateProducts, GetProducts };

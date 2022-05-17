const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const UploadImage = async (req, res) => {
	res.send("Upload the product!!");
};

module.exports = { UploadImage };

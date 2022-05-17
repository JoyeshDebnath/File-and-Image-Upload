const path = require("path");

const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const UploadImage = async (req, res) => {
	let productImage = req.files.image; //get the ginat image object of the express-fileupload
	const imagePath = path.join(
		__dirname,
		"../public/uploads/" + `${productImage.name}`
	);
	await productImage.mv(imagePath); //move the image to desired locatin
	return res
		.status(StatusCodes.OK)
		.json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { UploadImage };

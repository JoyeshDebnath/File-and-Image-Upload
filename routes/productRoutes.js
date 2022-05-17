const router = require("express").Router();
const {
	CreateProducts,
	GetProducts,
} = require("../controllers/productController");

const { UploadImage } = require("../controllers/uploadsController");

router.route("/").get(GetProducts).post(CreateProducts);
router.route("/upload").post(UploadImage);

module.exports = router;

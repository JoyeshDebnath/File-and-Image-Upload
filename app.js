require("dotenv").config();
require("express-async-errors");
const ProductRouter = require("./routes/productRoutes");
const express = require("express");
const FileUpload = require("express-fileupload");
const app = express();
app.use(express.json());
app.use(express.static("./public"));
app.use(FileUpload());
// database
const connectDB = require("./db/connect");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.get("/", (req, res) => {
	res.send("<h1>File Upload Starter</h1>");
});

app.use("/api/v1/products", ProductRouter);

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		console.log("DB connected successfully !");
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();

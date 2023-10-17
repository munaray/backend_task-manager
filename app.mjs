import connectDB from "./db/connect.mjs";
import express from "express";
import tasks from "./routes/tasks.mjs";
import dotenv from "dotenv";
import notFound from "./middleware/404.mjs";
import errorHandler from "./middleware/error-handler.mjs";

dotenv.config();

const app = express();
//Middleware
app.use(express.json());
app.use(express.static("./public"));

//Route
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();

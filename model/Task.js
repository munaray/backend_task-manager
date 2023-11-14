import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name must be provided"],
		trim: true,
		maxlength: [25, "Only 25 character must be provided"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;

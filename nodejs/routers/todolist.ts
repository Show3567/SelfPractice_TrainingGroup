const express = require("express");
const router = express.Router();
const { Todo } = require("../model/todos");

const mydb = require("../resouse/mydb");

router.get("/", (req, res) => {
	// res.send(mydb.todolist);
});
router.post("/addTodo", async (req, res) => {
	// res.send(req.body);
	const todo = new Todo({
		userId: req.body.userId,
		title: req.body.title,
		completed: req.body.completed,
	});

	await todo.save();
	console.log(await Todo.find());

	res.send(await Todo.find());
});

module.exports = router;

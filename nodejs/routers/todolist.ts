const express = require("express");
const router = express.Router();

const mydb = require("../resouse/mydb");

router.get("/", (req, res) => {
	res.send(mydb.todolist);
});

module.exports = router;

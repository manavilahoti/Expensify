const express = require("express");
const {addExpense, updateExpense, getAllExpenses, deleteExpense} = require('../controllers/expenseController.js');

const router = express.Router();

router.post("/", addExpense);
router.put("/:id", updateExpense);
router.get("/", getAllExpenses);
router.delete("/:id", deleteExpense);


module.exports = router;
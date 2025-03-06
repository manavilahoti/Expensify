const Expense = require('../models/expense');

const addExpense = async(req, res)=>{
    try{
        const newExpense = await Expense(req.body);
        const expense = newExpense.save();
        res.status(201).json(expense);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};

const updateExpense = async(req, res)=>{
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Expense deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {addExpense, updateExpense, getAllExpenses, deleteExpense};
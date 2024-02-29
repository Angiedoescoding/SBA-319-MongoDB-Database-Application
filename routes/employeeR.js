// route handlers 

const express = require('express');
const router = express.Router();

const employees = [
    {id: 1, name: "Adam Smith", hireYear: 2020, title: "QA Engineer" },
    {id: 2, name: "Olivia Johnson", hireYear: 2017, title: "HR Specialist" },
    {id: 3, name: "Julie Bolder", hireYear: 2022, title: "Payroll Specialist" }
]

// Get all employees --- Create GET routes
router.get('/', async (req, res) => {
    res.json(employees);
});

// GET a single employee by ID
router.get('/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).send('Employee not found.');
    res.json(employee);
});

// POST a new employee --- Create POST routes
router.post('/', async (req, res) => {
    //name: "Thor Odinson" , hireYear: 2020, title: "God of Thunder"

    res.send("New employee has been added.");
});

// PATCH (update) an employee by ID --- Create PATCH or PUT routes for data
router.patch('/:id', async (req, res) => {
    //need to create additionally
    res.send("Employee data updated.");
});

// DELETE an employee by ID --- Create DELETE routes for data
router.delete('/:id', async (req, res) => {
        //need to create additionally

    //let result = await db.collection('employees').deleteOne({ _id: ObjectID(id) });
    res.send("Employee deleted.");
});

module.exports = router;
//export default router; // terminal error
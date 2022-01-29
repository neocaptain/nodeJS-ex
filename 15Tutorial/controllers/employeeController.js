const Employee = require('../model/Employee');

const getAllEmployees = async (rq, res) => {
    const employees = await Employee.find();
    if(!employees) return res.sendStatus(204).json({ 'message': 'No employees found.'});
    res.json(employees);
}

const createNewEmployees = async (req, res) => {
    if(!req?.body?.firstname || !req?.body?.lastname) {
        return res.sendStatus(400).json({ 'message': 'First and Last names are required.'});
    }

    try{
        const result = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }  
}

const updateEmployee = async (req, res) => {
    if(!req?.body?.id) {
        return res.sendStatus(400).json({ 'message': 'ID parameter is required'});
    }

    const employee = await Employee.findOne({ _id: req.body.id }).exec();
    if(!employee) {
        return res.status(204).json({'message':`No employee matched ID ${req.body.id}`});
    }
    if(req.body?.firstname) employee.firstname = req.body.firstname;
    if(req.body?.lastname) employee.lastname = req.body.lastname;
    const result = await employee.save();
    res.json(result);
}

const deleteEmployee = async (req, res) => {
    if(!req?.body?.id) return res.sendStatus(400).json({ 'message': 'Employee ID required'});
    const employee = await Employee.findOne({ _id: req.body.id }).exec();
    if(!employee) {
        return res.status(204).json({'message':`No employee matched ID ${req.body.id}`});
    }
    const result = await employee.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getEmployee = async (req, res) => {
    if(!req?.params?.id) return res.sendStatus(400).json({ 'message': 'Employee ID required'});
    const employee = await Employee.findOne({ _id: req.params.id }).exec();
    if(!employee) {
        return res.status(204).json({'message':`No employee matched ID ${req.params.id}`});
    }
    res.json(employee);
}

module.exports =  {
    getAllEmployees,
    createNewEmployees,
    updateEmployee,
    deleteEmployee,
    getEmployee
}
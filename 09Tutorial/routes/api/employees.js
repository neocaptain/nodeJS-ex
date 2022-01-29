const express = require('express');
const router = express.Router();
const data = {};
const employeesController = require('../../controllers/employeeController')

router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployees)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;
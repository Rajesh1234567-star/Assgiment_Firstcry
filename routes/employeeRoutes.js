const express = require("express");
const employeeController = require("../controllers/employeeController");
const router = express.Router();

router.get(
    "/getEmployees",
    employeeController.getEmployees
);

router.get(
    "/getEmployee/:_Id",
    employeeController.getEmployee);

router.put(
    "/updateEmployee/:id",
    employeeController.updateEmployee);

router.post(
    "/createEmployee",
    employeeController.createEmployee);

router.delete(
    "/deleteEmployee/:id",
    employeeController.deleteEmployee);

router.delete(
    "/deleteEmployees",
    employeeController.deleteEmployees);


module.exports = router;
const express = require("express");
const router = express.Router();

const { createEmployee } = require("../controllers/createEmployee");
const { getAllEmployees } = require("../controllers/getAllEmployees");
const { updateEmployee } = require("../controllers/updateEmployee");
const { deleteEmployee } = require("../controllers/deleteEmployee");
const { searchEmployees } = require("../controllers/searchEmployee");
const { filterEmployees } = require("../controllers/filterEmployee");
const { avgSalOfDepartment } = require("../controllers/avgSalOfDepartment");
const { avgSalOfAllEmployees } = require("../controllers/avgSalOfAllEmployees");

router.post("/create", createEmployee);
router.get("/", getAllEmployees);
router.get("/search", searchEmployees);
router.get("/filter", filterEmployees);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:fullName", deleteEmployee);
router.get("/avgSalOfDepartment/:department", avgSalOfDepartment);
router.get("/avgSalOfAllEmployees", avgSalOfAllEmployees);

module.exports = router;

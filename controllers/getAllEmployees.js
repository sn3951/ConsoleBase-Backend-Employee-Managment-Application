const Employee = require("../models/employee");

exports.getAllEmployees = async (req, res) => {
  try {
    //fetch all employees from database
    const employees = await Employee.find();
    res.status(200).json({
      success: true,
      data: employees,
      message: "All the employees are Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal error",
      message: err.message,
    });
  }
};

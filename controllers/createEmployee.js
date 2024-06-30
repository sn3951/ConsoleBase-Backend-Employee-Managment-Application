const Employee = require("../models/employee");

exports.createEmployee = async (req, res) => {
  try {
    const { fullName, age, dob, salary, department } = req.body;

    // Create an employee
    const response = await Employee.create({
      fullName,
      age,
      dob,
      salary,
      department,
    });

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
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

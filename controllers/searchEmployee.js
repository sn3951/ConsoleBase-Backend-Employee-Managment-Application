const Employee = require("../models/employee");

exports.searchEmployees = async (req, res) => {
  try {
    const { query } = req.query;

    //Searching the employee in the database
    const employee = await Employee.find({
      $or: [
        { fullName: new RegExp(query, "i") },
        { department: new RegExp(query, "i") },
      ],
    });

    res.status(200).json({
      success: true,
      data: employee,
      message: "Employee Founded successfully",
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

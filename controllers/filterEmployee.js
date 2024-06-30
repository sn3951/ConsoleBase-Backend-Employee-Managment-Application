const Employee = require("../models/employee");

exports.filterEmployees = async (req, res) => {
  try {
    let { department, minSal, maxSal } = req.query;
    let filter = {};

    //Applying filters on the employees
    if (department) {
      filter.department = department;
    }
    if (minSal) {
      filter.salary = { $gte: parseInt(minSal) };
    }
    if (maxSal) {
      filter.salary = { ...filter.salary, $lte: parseInt(maxSal) };
    }

    const employee = await Employee.find(filter);

    res.status(200).json({
      success: true,
      data: employee,
      message: "Employee Filtered successfully",
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

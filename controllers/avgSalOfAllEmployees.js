const Employee = require("../models/employee");

exports.avgSalOfAllEmployees = async (req, res) => {
  try {
    // Calculating the avg sal of all employees
    const employees = await Employee.aggregate([
      {
        $group: {
          _id: null,
          averageSal: { $avg: "$salary" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: employees,
      message: `Got the Average salary of the all the employees`,
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

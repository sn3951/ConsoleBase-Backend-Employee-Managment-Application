const Employee = require("../models/employee");

exports.avgSalOfDepartment = async (req, res) => {
  try {
    const { department } = req.params;

    // Calculating avg sal of the department
    const employees = await Employee.aggregate([
      { $match: { department } },
      {
        $group: {
          _id: null,
          averageSal: { $avg: "$salary" },
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      data: employees,
      message: `Got the Average salary of the ${department} department `,
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

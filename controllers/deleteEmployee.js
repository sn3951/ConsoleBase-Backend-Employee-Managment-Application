const Employee = require("../models/employee");

exports.deleteEmployee = async (req, res) => {
  try {
    const { fullName } = req.params;

    //Deleting an employee
    const employee = await Employee.findOneAndDelete({ fullName });

    res.status(200).json({
      success: true,
      message: "Employee Deleted successfully",
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

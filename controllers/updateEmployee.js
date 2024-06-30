const Employee = require("../models/employee");

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, age, dob, salary, department } = req.body;

    // Finding the employee and updating
    const employee = await Employee.findByIdAndUpdate(
      id,
      { fullName, age, dob, salary, department },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: employee,
      message: "Updated Successfully",
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

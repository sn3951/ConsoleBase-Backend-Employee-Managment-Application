const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware to parse json request body
app.use(express.json());

const employeeRoutes = require("./routes/employee");

//mounting the employee api routed
app.use("/api/v1", employeeRoutes);

//starting the serever
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("This is the default route");
});

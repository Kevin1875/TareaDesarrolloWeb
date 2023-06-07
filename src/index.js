const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRouter.js");

const app = express();
app.use(express.json());
const port = process.env.PORT || 9000;

//router
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conncet to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.use("/api/user", userRoutes);

app.listen(port, () => console.log("server listening on port", port));

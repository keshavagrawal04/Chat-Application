const express = require("express");
const { database } = require("./utils");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

database.connect();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Index Route Of Chat Application" });
});

const { userRoutes } = require("./routes");
app.use("/api/v1/user/", userRoutes);

module.exports = app;

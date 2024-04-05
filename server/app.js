const express = require("express");
const { database } = require("./utils");

const app = express();
app.use(express.json());

database.connect();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Index Route Of Chat Application" });
});

const { userRoutes } = require("./routes");
app.use("/api/v1/user/", userRoutes);

module.exports = app;

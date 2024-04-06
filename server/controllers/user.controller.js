const { userService } = require("../services");
const { crypto } = require("../utils");

const createUser = async (req, res) => {
  try {
    let user = await userService.findUserByEmail(req.body.email);
    if (user)
      return res
        .status(400)
        .json({ message: "User With This Email Is Already Exists" });
    req.body.password = await crypto.generateHash(req.body.password);
    user = await userService.saveUser(req.body);
    res.status(201).json({ message: "User Created Successfully", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return users;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userService.findUserByEmail(req.body.email);
    if (!user)
      return res
        .status(400)
        .json({ message: "User With This Email Is Not Exists" });
    const isPasswordValid = await crypto.validateHash(
      req.body.password,
      user.password.hash,
      user.password.salt
    );
    if (!isPasswordValid)
      return res.status(400).json({ message: "Password Mismatch" });
    res
      .status(200)
      .json({ message: "User Logged In Successfully", data: user });
  } catch (error) {}
};

module.exports = { createUser, getAllUsers, loginUser };

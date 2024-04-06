const { User } = require("../models");

const saveUser = async (payload) => {
  try {
    const user = await User.create({ ...payload });
    return user;
  } catch (error) {
    throw error;
  }
};

const findAllUsers = async (query) => {
  try {
    const search = query.search
      ? {
          $or: [
            { name: { $regex: query.search, $options: "i" } },
            { email: { $regex: query.search, $options: "i" } },
          ],
        }
      : {};
    let users = await User.find(search);
    return users;
  } catch (error) {
    throw error;
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById({ _id: userId });
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { saveUser, findUserByEmail, findAllUsers, findUserById };

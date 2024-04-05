const mongoose = require("mongoose");

const connect = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${process.env.MONGO_DB_NAME}`
    );
    console.log(`Mongo Db Connection Success : ${connection.connection.host}`);
  } catch (error) {
    console.log(`Mongo Db Connection Failed : ${error.message}`);
  }
};

module.exports = { connect };

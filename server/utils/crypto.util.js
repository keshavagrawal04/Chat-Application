const crypto = require("crypto");

const generateHash = async (
  password,
  salt = crypto.randomBytes(64).toString("hex")
) => {
  try {
    const generatedHash = await crypto
      .pbkdf2Sync(password, salt, 1000, 32, "sha256")
      .toString("hex");
    return { hash: generatedHash, salt };
  } catch (error) {
    throw error;
  }
};

const validateHash = async (password, hash, salt) => {
  try {
    const { hash: generatedHash } = await generateHash(password, salt);
    const isHashValid = hash === generatedHash;
    return isHashValid;
  } catch (error) {
    throw error;
  }
};

module.exports = { generateHash, validateHash };

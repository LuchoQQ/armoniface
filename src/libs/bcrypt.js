const bcrypt = require("bcrypt");

const saltRounds = 10;

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

const comparePassword = async (password, hash) => {
    const result = await bcrypt.compare(password, hash);
    return result;
};

module.exports = {
    hashPassword,
    comparePassword,
};

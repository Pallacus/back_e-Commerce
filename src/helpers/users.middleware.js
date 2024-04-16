const UsersModel = require("../models/users.model");

const checkUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const [users] = await UsersModel.selectUserById(userId);

    if (users.length === 0) {
      return res.json({ fatal: `No existe ningún usuario con este id.` });
    }
    req.user = users[0];
    next();
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  checkUser,
};

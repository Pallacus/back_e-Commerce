const router = require("express").Router();

const { checkUser } = require("../../helpers/users.middleware");
const UsersModel = require("../../models/users.model");

// GET /users
router.get("/", async (req, res) => {
  try {
    const [result] = await UsersModel.selectAllUsers();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /users/USERID
router.get("/:userId", checkUser, async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// POST /users/new
router.post("/new", async (req, res) => {
  try {
    const [user] = await UsersModel.insertUser(req.body);
    const [[result]] = await UsersModel.selectUserById(user.insertId);

    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//PUT /users/update/USERID
router.put("/update/:userId", checkUser, async (req, res) => {
  const {
    params: { userId },
    body,
  } = req;
  try {
    await UsersModel.updateUser(userId, body);
    res.json(req.user);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//DELETE /users/USERID
router.delete("/:userId", checkUser, async (req, res) => {
  const { userId } = req.params;
  try {
    await UsersModel.deleteUserById(userId);
    res.json(req.user);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;

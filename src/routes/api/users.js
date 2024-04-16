const router = require("express").Router();

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
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const [[result]] = await UsersModel.selectUserById(userId);

    return result
      ? res.json(result)
      : res.json({ fatal: "El usuario no existe" });
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
router.put("/update/:userId", async (req, res) => {
  const {
    params: { userId },
    body,
  } = req;

  try {
    await UsersModel.updateUser(userId, body);
    const [[result]] = await UsersModel.selectUserById(userId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//DELETE /users/USERID
router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const [[user]] = await UsersModel.selectUserById(userId);
    await UsersModel.deleteUserById(userId);

    return user ? res.json(user) : res.json({ fatal: "El usuario no existe" });
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;

const router = require("express").Router();

// GET /users
router.get("/", (req, res) => {
  res.end("Recupero todos los usuarios");
});

// POST /users/new
router.post("/new", (req, res) => {
  res.end("Creo un nuevo usuario");
});

//PUT /users/update/PRODUCTID
router.put("/update/:userId", (req, res) => {
  res.end("Actualizo un un usuario por ID");
});

//DELETE /users/PRODUCTID
router.delete("/:userId", (req, res) => {
  res.end("Borro un usuario por ID");
});

module.exports = router;

const router = require("express").Router();

// GET /comments
router.get("/", (req, res) => {
  res.end("Recupero todos los comentarios");
});

// POST /comments/new
router.post("/new", (req, res) => {
  res.end("Creo un nuevo comentario");
});

//PUT /comments/update/COMMENTID
router.put("/update/:commentId", (req, res) => {
  res.end("Actualizo un un comentario por ID");
});

//DELETE /comments/COMMENTID
router.delete("/:commentId", (req, res) => {
  res.end("Borro un commentario por ID");
});

module.exports = router;

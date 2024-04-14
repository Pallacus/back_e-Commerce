const router = require("express").Router();

// GET /categories
router.get("/", (req, res) => {
  res.end("Recupero todas las categorías");
});

// POST /categories/new
router.post("/new", (req, res) => {
  res.end("Creo una nueva categoría");
});

//PUT /categories/update/CATEGORYID
router.put("/update/:categoryId", (req, res) => {
  res.end("Actualizo una categoría por ID");
});

//DELETE /categories/CATEGORYID
router.delete("/:categoryId", (req, res) => {
  res.end("Borro una categoría por ID");
});

module.exports = router;

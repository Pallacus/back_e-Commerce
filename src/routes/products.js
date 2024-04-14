const router = require("express").Router();

// GET /products
router.get("/", (req, res) => {
  res.end("Recupero todos los productos");
});

// POST /products/new
router.post("/new", (req, res) => {
  res.end("Creo un nuevo producto");
});

//PUT /products/update/PRODUCTID
router.put("/update/:productId", (req, res) => {
  res.end("Actualizo un un producto por ID");
});

//DELETE /products/PRODUCTID
router.delete("/:productId", (req, res) => {
  res.end("Borro un producto por ID");
});

module.exports = router;

const router = require("express").Router();

// GET /orders
router.get("/", (req, res) => {
  res.end("Recupero todos los pedidos");
});

// POST /orders/new
router.post("/new", (req, res) => {
  res.end("Creo un nuevo pedido");
});

//PUT /orders/update/CODE O CODE ???
router.put("/update/:orderCode", (req, res) => {
  res.end("Actualizo un un pedido por código");
});

//DELETE /orders/FAVORITEID
router.delete("/:orderId", (req, res) => {
  res.end("Borro un pedido por ID");
});

module.exports = router;

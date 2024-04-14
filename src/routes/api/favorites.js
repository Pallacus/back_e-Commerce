const router = require('express').Router();

// GET /favorites
router.get("/", (req, res) => {
    res.end("Recupero todos los favoritos");
  });
  
  // POST /favorites/new
  router.post("/new", (req, res) => {
    res.end("Creo un nuevo favorito");
  });
  
  //PUT /favorites/update/FAVORITEID
  router.put("/update/:favoriteId", (req, res) => {
    res.end("Actualizo un un favorito por ID");
  });
  
  //DELETE /favorites/FAVORITEID
  router.delete("/:favoriteId", (req, res) => {
    res.end("Borro un favorito por ID");
  });
  
module.exports = router;
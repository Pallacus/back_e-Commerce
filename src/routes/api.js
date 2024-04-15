const router = require("express").Router();

router.use("/categories", require("./api/categories"));
router.use("/comments", require("./api/comments"));
router.use("/favorites", require("./api/favorites"));
router.use("/orders", require("./api/orders"));
router.use("/products", require("./api/products"));

module.exports = router;

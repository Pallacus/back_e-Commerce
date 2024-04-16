const router = require("express").Router();
const OrdersModel = require("../../models/orders.model");
// GET /orders
router.get("/", async (req, res) => {
  try {
    const [result] = await OrdersModel.selectAllOrders();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /orders/CODE
router.get("/", (req, res) => {
  try {
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// POST /orders/new
router.post("/new", (req, res) => {
  try {
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//PUT /orders/update/CODE
router.put("/update/:orderCode", (req, res) => {});

//DELETE /orders/CODE
router.delete("/:orderId", (req, res) => {
  try {
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;

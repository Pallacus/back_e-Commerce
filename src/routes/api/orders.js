const router = require("express").Router();
const OrdersModel = require("../../models/orders.model");
const { checkToken, checkAdminRole } = require("../../helpers/users.middlewares");

// GET /orders
router.get("/", async (req, res) => {
  try {
    const [result] = await OrdersModel.selectAllOrders();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET withNames /orders/names
router.get('/names', async (req, res) => {
  try {
    const [result] = await OrdersModel.selectAllWithNames();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /orders/CODE
router.get("/:orderCode", async (req, res) => {
  const code = req.params.orderCode;

  try {
    const [result] = await OrdersModel.selectOrdersByCode(code);

    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// POST /orders/new
router.post("/new", async (req, res) => {
  try {
    const [order] = await OrdersModel.insertOrder(req.body);
    const [[result]] = await OrdersModel.selectOrderById(order.insertId);

    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//TODO borrar pedidos
/**
 * TODO TERMINAR BORRADO DE PEDIDOS
 * ? Se deben poder anular pedidos
 * ! Yo lo dejaría para gestión de devolución que nuestra app ahora mismo no lo haría.
 */
//DELETE /orders/CODE
router.delete("/:order_id", checkToken, checkAdminRole, async (req, res) => {
  try {
    const [order] = await OrdersModel.deleteOrderById(req.params.order_id);
    console.log(order);
    res.json(order);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;

const selectAllOrders = () => {
  return db.query("SELECT * FROM orders");
};

const selectOrderById = (orderId) => {
  return db.query("SELECT * FROM orders WHERE id = ?", orderId);
};

const selectOrdersByCode = (orderCode) => {
  return db.query("SELECT * FROM orders WHERE code = ?", orderCode);
};

const insertOrder = ({ code, quantity, users_id, products_id }) => {
  return db.query(
    "INSERT INTO orders (code, quantity,users_id, products_id) VALUES (?,?,?,?)",
    [code, quantity, users_id, products_id]
  );
};

const updateOrder = (orderId, { code, quantity, users_id, products_id }) => {
  return db.query(
    "UPDATE orders SET code = ?, quantity = ?, users_id = ?, products_id = ? WHERE id = ? ",
    [code, quantity, users_id, products_id, orderId]
  );
};

const deleteOrderById = (orderId) => {
  return db.query("DELETE FROM orders WHERE id = ?", [orderId]);
};

module.exports = {
  selectAllOrders,
  selectOrderById,
  selectOrdersByCode,
  insertOrder,
  updateOrder,
  deleteOrderById,
};

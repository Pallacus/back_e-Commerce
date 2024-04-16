const selectAllOrders = () => {
  return db.query("SELECT * FROM orders");
};

const selectOrderById = (orderId) => {
  return db.query("SELECT * FROM Orders WHERE id = ?", orderId);
};

const insertOrder = ({ code, quantity, users_id, products_id }) => {
  return db.query(
    "INSERT INTO Orders (code, quantity,users_id, products_id) VALUES (?,?,?,?)",
    [code, quantity, users_id, products_id]
  );
};

const updateOrder = (orderId, { code, quantity, users_id, products_id }) => {
  return db.query(
    "UPDATE Orders SET code = ?, quantity = ?, users_id = ?, products_id = ? WHERE id = ? ",
    [code, quantity, users_id, products_id, orderId]
  );
};

const deleteOrderById = (orderId) => {
  return db.query("DELETE FROM Orders WHERE id = ?", [orderId]);
};

module.exports = {
  selectAllOrders,
  selectOrderById,
  insertOrder,
  updateOrder,
  deleteOrderById,
};

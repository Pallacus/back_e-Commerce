
const getAllProducts = () => {
    return db.query('SELECT * FROM e_commerce.products');
}

const getProductById = (productId) => {
    return db.query('SELECT * FROM e_commerce.products p WHERE id = ? ', [productId]);
}

const insertNewProduct = ({ title, description, price, image, featured, categories_id }) => {
    return db.query(`
    INSERT INTO products(title, description, price, image, featured, categories_id)
    VALUES(?, ?, ?, ?, ?, ?);`,
        [title, description, price, image, featured, categories_id]
    );
}

const updateProduct = (productId, { title, description, price, image, featured, categories_id }) => {
    return db.query(`
    UPDATE products 
    SET title = ?, description = ?, price = ?, image = ?, featured = ?, categories_id = ?
    WHERE id = ?;`,
        [title, description, price, image, featured, categories_id, productId]);
}

const deleteProduct = (productId) => {
    return db.query(`
    DELETE FROM products
    WHERE products.id =?`,
        [productId]);
}
module.exports = { getAllProducts, getProductById, insertNewProduct, updateProduct, deleteProduct };
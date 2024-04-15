const getAllCategories = () => {
    return db.query('SELECT * FROM e_commerce.categories');
}
const insertNewCategory = (title) => {
    return db.query(`
INSERT INTO e_commerce.categories (title) VALUES (?);`, [title]);
}
const getCategoryById = (categoryId) => {
    return db.query(`
    SELECT * FROM e_commerce.categories
    WHERE categories.id = ?`, [categoryId]);
}
const updateCategory = (categoryId, title) => {
    console.log(categoryId, title);
    return db.query(`
    UPDATE e_commerce.categories
    SET title = ?
    WHERE categories.id = ?`,
        [title, categoryId]);
}
const deleteCategory = (categoryId) => {
    return db.query(`
    DELETE FROM e_commerce.categories
    WHERE categories.id = ?`,
        [categoryId]);
}

module.exports = { getAllCategories, insertNewCategory, getCategoryById, updateCategory, deleteCategory };
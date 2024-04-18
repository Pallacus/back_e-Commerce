const getAllFavorites = () => {
    return db.query(`
    SELECT * FROM favorites`);
}
const getFavoriteById = (favoriteId) => {
    return db.query(`
    SELECT * FROM favorites
    WHERE id = ?`,
        [favoriteId]);
}
const getFavoritesByUser = (usersId) => {
    return db.query(`
    SELECT * FROM favorites
    WHERE users_id = ?`,
        [usersId]);
}
const getFavoritesPaginated = (usersId, page, limit) => {
    page = Number(page);
    limit = Number(limit);

    return db.query(`
    SELECT * FROM favorites 
    WHERE users_id = ? 
    LIMIT ? OFFSET ?`,
        [usersId, limit, ((page - 1) * limit)]
    );
}
const addFavorite = ({ users_id, products_id }) => {
    return db.query(`
    INSERT INTO favorites (users_id, products_id)
    VALUES (?, ?)`, [users_id, products_id]);
}
const updateFavoriteById = (favoriteId, body) => {
    return db.query(`
    UPDATE favorites SET users_id = ?, products_id = ?
    WHERE id = ?`,
        [body.users_id, body.products_id, favoriteId]);
}
const deleteFavorite = (favoriteId) => {
    return db.query(`
    DELETE FROM favorites
    WHERE id = ?`,
        [favoriteId]);
}
module.exports = { getAllFavorites, getFavoriteById, getFavoritesByUser, getFavoritesPaginated, addFavorite, updateFavoriteById, deleteFavorite }
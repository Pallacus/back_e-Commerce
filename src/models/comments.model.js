const getAllComments = () => {
    return db.query('SELECT * FROM comments');
}
const insertNewComment = ({ text, users_id, products_id }) => {
    return db.query(`
    INSERT INTO comments(text, users_id, products_id) VALUES(?, ?, ?);`,
        [text, users_id, products_id]);
}
const getCommentById = (commentId) => {
    return db.query(`
    SELECT * FROM comments
    WHERE comments.id = ?`,
        [commentId]);
}
const updateComment = (commentId, { text, users_id, products_id }) => {
    return db.query(`
    UPDATE comments
    SET text = ?, users_id = ?, products_id  = ? WHERE id = ?;`,
        [text, users_id, products_id, commentId]);
}
const deleteComment = (commentId) => {
    return db.query(`
DELETE FROM comments
WHERE comments.id = ?`,
        [commentId]);
}

module.exports = { getAllComments, insertNewComment, getCommentById, updateComment, deleteComment };
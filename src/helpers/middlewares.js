const Product = require('../models/products.model');
const Comment = require('../models/comments.model');

const checkProduct = async (req, res, next) => {
    const { productId } = req.params;
    try {
        const [products] = await Product.getProductById(productId);
        if (products.length === 0) {
            return res.json({ fatal: `No existe ningún producto con este id.` });
        }
        req.product = products[0];
        next()
    } catch (error) {
        res.json({ fatal: error.message });
    }
}
const checkComment = async (req, res, next) => {
    const { commentId } = req.params;
    try {
        const [comments] = await Comment.getCommentById(commentId);
        if (comments.length === 0) {
            return res.json({ fatal: `No existe este comentario.` });
        }
        req.product = comments[0];
        next()
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { checkProduct, checkComment };
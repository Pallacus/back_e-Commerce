const { getAllComments, insertNewComment, getCommentById, updateComment, deleteComment, getCommentsByProductId } = require('../../models/comments.model');
const { checkComment } = require('../../helpers/comment.middlewares');

const router = require("express").Router();

// GET /comments
router.get("/", async (req, res) => {
  try {
    const [result] = await getAllComments();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.get('/:productId', async (req,res) =>{
  try {
    const [result] = await getCommentsByProductId(req.params.productId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});


// POST /comments/new
router.post("/new", async (req, res) => {
  try {
    const [result] = await insertNewComment(req.body)
    const [comments] = await getCommentById(result.insertId);
    res.json(comments[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//PUT /comments/update/COMMENTID
router.put("/update/:commentId", checkComment, async (req, res) => {
  const { params: { commentId }, body } = req;
  try {
    await updateComment(commentId, body);
    const [comments] = await getCommentById(commentId);
    res.json(comments[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//DELETE /comments/COMMENTID
router.delete("/:commentId", checkComment, async (req, res) => {
  const { commentId } = req.params;
  try {
    await deleteComment(commentId);
    res.json(req.product);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;

const {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProduct,
  deleteProduct,
  getAllProductsPaginated,
  getProductByCategoryId,
  getAllProductsFeatured,
} = require("../../models/products.model");
const { checkProduct } = require("../../helpers/product.middlewares");

const router = require("express").Router();

// GET /products
router.get("/", async (req, res) => {
  try {
    const [result] = await getAllProducts();
    res.json(result);
  } catch (error) {
    res.json({ Fatal: error.message });
  }
});

// GET /products/featured
router.get("/featured", async (req, res) => {
  try {
    const [result] = await getAllProductsFeatured();
    res.json(result);
  } catch (error) {
    res.json({ Fatal: error.message });
  }
});

// GET /products/paginated?page=1&limit=16
router.get("/paginated", async (req, res) => {
  let { page = 1, limit = 16 } = req.query;
  try {
    const [products] = await getAllProductsPaginated(page, limit);
    res.json(products);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /products/PRODUCTID
router.get("/:productId", checkProduct, async (req, res) => {
  try {
    res.json(req.product);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /products/category/CATEGORYID
router.get("/category/:categoryId", async (req, res) => {
  try {
    const [result] = await getProductByCategoryId(req.params.categoryId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// POST /products/new
router.post("/new", async (req, res) => {
  try {
    const [result] = await insertNewProduct(req.body);
    const [products] = await getProductById(result.insertId);
    res.json(products[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//PUT /products/update/PRODUCTID
router.put("/update/:productId", checkProduct, async (req, res) => {
  //updateProduct
  const {
    params: { productId },
    body,
  } = req;
  try {
    await updateProduct(productId, body);
    const [products] = await getProductById(productId);
    res.json(products[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//DELETE /products/PRODUCTID
router.delete("/:productId", checkProduct, async (req, res) => {
  const { productId } = req.params;
  try {
    await deleteProduct(productId);
    res.json(req.product);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;

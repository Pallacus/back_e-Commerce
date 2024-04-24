const ProductModel = require("../../models/products.model");
const UsersModel = require("../../models/users.model")
const { checkProduct } = require("../../helpers/product.middlewares");
const { checkToken, checkAdminRole } = require("../../helpers/users.middlewares");

const router = require("express").Router();

// GET /products
router.get("/", async (req, res) => {
  try {
    const [result] = await ProductModel.getAllProducts();
    res.json(result);
  } catch (error) {
    res.json({ Fatal: error.message });
  }
});

// GET /products/featured
router.get("/featured", async (req, res) => {
  try {
    const [result] = await ProductModel.getAllFeaturedProducts();
    res.json(result);
  } catch (error) {
    res.json({ Fatal: error.message });
  }
});

// GET /products/paginated?page=1&limit=16
router.get("/paginated", async (req, res) => {
  let { page = 1, limit = 16 } = req.query;
  try {
    const [products] = await ProductModel.getAllProductsPaginated(page, limit);
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
    const [result] = await ProductModel.getProductByCategoryId(
      req.params.categoryId
    );
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// POST /products/new
router.post("/new", checkToken, checkAdminRole, async (req, res) => {
  try {
    const [result] = await ProductModel.insertNewProduct(req.body);
    const [products] = await ProductModel.getProductById(result.insertId);
    res.json(products[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//  selectUsersByFavoriteProduct

//PUT /products/update/PRODUCTID
router.put("/update/:productId", checkProduct, checkToken, checkAdminRole, async (req, res) => {
  const { params: { productId }, body } = req;
  try {

    const [beforeProducts] = await ProductModel.getProductById(productId);
    await ProductModel.updateProduct(productId, body);
    const [products] = await ProductModel.getProductById(productId);
    res.json(products[0]);

    if (beforeProducts[0].price !== products[0].price) {
      const [users] = await UsersModel.selectUsersByFavoriteProduct(products[0].id);
      console.log(users);

    }

  } catch (error) {
    console.log(error);
    res.json({ fatal: error.message });
  }
}
);

//DELETE /products/PRODUCTID
router.delete("/:productId", checkProduct, checkToken, checkAdminRole, async (req, res) => {
  const { productId } = req.params;
  try {
    await ProductModel.deleteProduct(productId);
    res.json(req.product);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;

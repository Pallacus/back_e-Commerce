
const { getAllFavorites, getFavoriteById, getFavoritesByUser, addFavorite, updateFavoriteById, deleteFavorite } = require('../../models/favorites.model')

const router = require('express').Router();

// GET /favorites
router.get("/", async (req, res) => {
  try {
    const [result] = await getAllFavorites();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /favorites/:USERID
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const [favorites] = await getFavoritesByUser(userId);
    res.json(favorites);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// POST /favorites/new
router.post("/new", async (req, res) => {
  try {
    const [result] = await addFavorite(req.body);
    const [favorites] = await getFavoriteById(result.insertId);
    res.json(favorites[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//PUT /favorites/update/FAVORITEID
router.put("/update/:favoriteId", async (req, res) => {
  const { params: { favoriteId }, body } = req;
  try {
    await updateFavoriteById(favoriteId, body);
    const [favorites] = await getFavoriteById(favoriteId);
    res.json(favorites[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

//DELETE /favorites/FAVORITEID
router.delete("/:favoriteId", async (req, res) => {
  let favoriteId = req.params.favoriteId;
  try {
    const [favorites] = await getFavoriteById(favoriteId);
    await deleteFavorite(favoriteId);
    if (favorites.length === 0) {
      res.json('Este favorito no existe.')
    }
    res.json(favorites[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;
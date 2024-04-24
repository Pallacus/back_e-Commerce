const router = require("express").Router();
const { sendMail } = require("../../helpers/utils");

router.post('/', async (req, res) => {
    sendMail("mariogironm@gmail.com", "api", "hahaha");
    res.send('Cosas')
});

module.exports = router;
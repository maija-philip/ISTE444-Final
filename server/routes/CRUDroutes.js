let express = require("express");
const router = express.Router();
const path = require("path");

// GET /api/
router.get("/", function (req, res) {
    res.status(200).json({ message: `Hello` });
});

module.exports = router;

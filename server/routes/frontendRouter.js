let express = require("express");
const router = express.Router();
const path = require("path");

// GET index.html
router.get("/", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../../frontend/build", "index.html")
  );
});

module.exports = router;

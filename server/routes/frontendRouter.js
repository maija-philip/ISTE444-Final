let express = require("express");
const router = express.Router();
const path = require("path");
const { isAuthorizedHasSessionForWebsite } = require("../sessionMiddleware");

// GET index.html
router.get("/", isAuthorizedHasSessionForWebsite, function (req, res) {
  res.sendFile(
    path.join(__dirname, "../../frontend/build", "index.html")
  );
});

// GET login
router.get("/login", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../../frontend/build", "index.html")
  );
});

module.exports = router;

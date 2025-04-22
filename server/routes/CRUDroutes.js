let express = require("express");
const router = express.Router();
const path = require("path");
const { getCow } = require("../../business/getCow");
const { getCows } = require("../../business/getCows");
const { createCow } = require("../../business/createCow");
const { deleteCow } = require("../../business/deleteCow");
const { editCow } = require("../../business/editCow");
const { isAuthorizedHasSessionForAPI } = require("../sessionMiddleware");

// GET /api/cow?id=
router.get("/cow", isAuthorizedHasSessionForAPI, async function (req, res) {
  const id = req.query.id;

  // check if we got an id
  if (!id || isNaN(id)) {
    res
      .status(400)
      .json({ error: `Must provide an integer id as a query param` });
    return;
  }

  // send to business layer
  const result = await getCow(id);

  if (result.hasOwnProperty("error")) {
    res.status(404).json(result);
    return;
  }

  res.status(200).json(result);
});

// GET /api/cows
router.get("/cows", isAuthorizedHasSessionForAPI, async function (req, res) {
  // send to business layer
  const result = await getCows();

  if (result.hasOwnProperty("error")) {
    res.status(404).json(result);
    return;
  }

  res.status(200).json(result);
});

// POST /api/cow
router.post("/cow", isAuthorizedHasSessionForAPI, async function (req, res) {
  // check to make sure all the data is there
  if (
    !req.body.hasOwnProperty("name") ||
    !req.body.hasOwnProperty("age") ||
    !req.body.hasOwnProperty("evil") ||
    !req.body.hasOwnProperty("weight") ||
    !req.body.hasOwnProperty("description")
  ) {
    res.status(400).json({
      error:
        "Must include a name, weight, and whether or not the cow is evil, age, and description.",
    });
    return;
  }

  // send to business layer
  const result = await createCow(req.body);

  if (result.hasOwnProperty("error")) {
    res.status(500).json(result);
    return;
  }

  res.status(200).json(result);
});

// PUT /api/cow
router.put("/cow", isAuthorizedHasSessionForAPI, async function (req, res) {
  // check to make sure all the necessary data is there
  if (
    !req.body.hasOwnProperty("id") ||
    (!req.body.hasOwnProperty("name") &&
      !req.body.hasOwnProperty("age") &&
      !req.body.hasOwnProperty("evil") &&
      !req.body.hasOwnProperty("weight") &&
      !req.body.hasOwnProperty("description"))
  ) {
    res.status(400).json({
      error:
        "Must include the id of the cow you want to edit and one property to edit out of: name, evil, weight, age, and description",
    });
    return;
  }

  // send to business layer
  const result = await editCow(req.body);

  if (result.hasOwnProperty("error")) {
    res.status(500).json(result);
    return;
  }

  res.status(200).json(result);
});

// DELETE /api/cow
router.delete("/cow", isAuthorizedHasSessionForAPI, async function (req, res) {
  const id = req.query.id;

  // check if we got an id
  if (!id || isNaN(id)) {
    res
      .status(400)
      .json({ error: `Must provide an integer id as a query param` });
    return;
  }

  // send to business layer
  const result = await deleteCow(id);

  if (result.hasOwnProperty("error")) {
    res.status(404).json(result);
    return;
  }

  res.status(200).json(result);
});

module.exports = router;

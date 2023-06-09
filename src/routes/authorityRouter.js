const express = require("express");
const router = express.Router();
const authorityController = require("../controllers/authorityController");

router
  .route("/")
  .get(authorityController.getAuthorities)
  .post(authorityController.createAuthority);

router
  .route("/:id")
  .get(authorityController.createAuthority)
  .patch(authorityController.updateAuthority)
  .delete(authorityController.deleteAuthority);

module.exports = router;

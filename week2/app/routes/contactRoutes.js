const { getContacts,getOneContact, gContacts, update, deleteContact } = require("../controllers/contactController");

const router = require("express").Router();

router.get("/", getContacts);

router.get("/:id", gContacts);

router.get("/:id", getOneContact);

router.put("/:id", update);

router.delete("/:id", deleteContact);

module.exports = router;
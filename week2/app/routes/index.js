// const { 
//     ContactModel,
//     Pager,
//     sortContacts,
//     filterContacts
// } = require("@jworkman-fs/asl")

const express = require("express");
const contactRoutes = require("./contactRoutes")
const router = express.Router();


router.use("/contacts", contactRoutes);

module.exports = router;
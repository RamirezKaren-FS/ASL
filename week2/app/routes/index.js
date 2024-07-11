const { 
    ContactModel,
    Pager,
    sortContacts,
    filterContacts
} = require("@jworkman-fs/asl")

const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.json(ContactModel.index())
})

module.exports = router;
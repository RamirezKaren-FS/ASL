const { 
    ContactModel,
    Pager,
    sortContacts,
    filterContacts
} = require("@jworkman-fs/asl")

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json(ContactModel.index())
})

app.listen(8080)
const express = require("express")
const knex = require("knex")
const db = require("../data/config")

const router = express.Router()

//GET
router.get("/", async (req,res,next) => {
    try {
        res.json(await db("cars"))
    } catch (err) {
        next(err)
    }
})
//GET by ID

//POST

module.exports = router
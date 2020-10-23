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
router.get("/:id", async (req,res,next) => {
    try {
        const id = req.params.id
        const cars = await db("cars").where({ id }).first()
    
        res.json(cars)
    } catch (err) {
        next(err)
    }
})
//POST
router.post("/", async (req, res, next) => {
	try {
		const [id] = await db("cars").insert(req.body)
		const newCar = await db("cars").where({ id }).first()

		res.status(201).json(newCar)
	} catch(err) {
		next(err)
	}
})

module.exports = router
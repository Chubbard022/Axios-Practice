const knex = require("knex")
const router = require("express").Router()
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development);


router.get("/",(req,res)=>{
    db("actions")
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(err=>{
            res.status(500).json({errorMessge:"could not GET data"})
        })
})
router.post("/",(req,res)=>{
    db("actions")
    .insert(req.body)
    .then(ids=>{
        db("actions")
        .where({id: ids[0]})
        .first()
        .then(response=>{
            res.status(201).json(response)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})
module.exports = router;
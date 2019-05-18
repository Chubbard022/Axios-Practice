const knex = require("knex")
const router = require("express").Router()
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development);

router.get("/",(req,res)=>{
    db("recipe")
      .then(response=>{
        res.status(200).json(response)
      })
      .catch(err=>{
        res.status(500).json(err)
      })
  })

module.exports = router;
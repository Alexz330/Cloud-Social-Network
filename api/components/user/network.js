const express = require('express')
const response = require('../../../network/response')

const router = express.Router()
router.use(express.json()) 
const Controller = require('./index')


router.get("/", (req, res) => {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })
});

router.get("/:id", (req, res) => {

    Controller.get(req.params.id)
        .then(user => {
            response.success(req, res, user, 200)

        })
        .catch(err => {
            response.error(req, res, err.message, 500)
        })
});

router.post("/", (req, res) => {
    
    Controller.upsert(req.body)
        .then(user => {
            response.success(req, res, user, 200)
        })
        .catch(err => {

            response.error(req, res, err.message, 500)
        })
})

module.exports = router;
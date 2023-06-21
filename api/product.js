const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();
const filePath = 'data.json';

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


/**
 * GET product list
 * 
 * @return product list | empty.
 */

router.get("/", async (req, res) => {
    try{
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              res.status(500).send('Erro interno do servidor');
            } else {
              const json = JSON.parse(data);
              res.json(json);
            }
          });
    } catch (error) {
        console.error(error);
        return res.status(500).send("server error");
    }
})

module.exports = router;
 const express = require('express');
 const router = express.Router();
 
 const Record = require('../models/Record');
 
 router.get('/', async (req, res) => {
    res.json(await Record.find());
 });
 
 router.post('/', async (req, res) => {
    const record = new Record(req.body);
    await record.save();
    res.json({state: 'success'});
 });

 module.exports = router;
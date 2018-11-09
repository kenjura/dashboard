const express = require('express');
const geo = require('../model/geo');

const router = express.Router();

router.use('/geo', async (req,res) => {
	const result = await geo.get();
	res.send(result);
});
router.use('/', (req,res) => res.send('welcome'));


module.exports = router;
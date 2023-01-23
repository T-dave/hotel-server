var express = require('express');
var router = express.Router();
var {getHotels, getHotel, addHotel} = require('../controllers/hotelController');

router.route('/')
.get(getHotels)
.post(addHotel);

router.route('/search')
.post(getHotel);


module.exports = router

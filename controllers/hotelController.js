var Hotels = require('../schema/hotelSchema');


const getHotels = async(req, res)=>{
	const value = await Hotels.find({});
	if(!value) return res.status(400).json({"Message": "No hotel found"});
	res.json(value);
}
const addHotel = async(req,res)=>{
	if(!req.body.hotel || !req.body.location) return res.status(400).json({"Message": "Hotel name and locaton must be imputed"});
	const hotel = await Hotels.findOne({hotel:req.body.hotel}).exec();
	if (hotel && hotel.location == req.body.location) return res.status(400).json({"Message": "Hotel already exists"});
	const newHotel = await Hotels.create({
		hotel:req.body.hotel,
		location:req.body.location,
		star:req.body.star,
		price:req.body.price
	});
	console.log(newHotel);
	return res.sendStatus(201);
}
const getHotel = async(req, res)=>{
	if (!req.body.hoteltel) return res.status(400).json({"Message": "Input hotel name"});
	const result = await Hotels.findOne({hotel:req.body.hotel}).exec();
	if (!result) return res.status(400).json({"Message": `${req.body.hotel} does not exist in our database`});
	res.json(result);
}

module.exports = {getHotels, getHotel, addHotel}
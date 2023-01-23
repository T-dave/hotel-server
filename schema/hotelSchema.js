var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var hotelSchema = new Schema({
	hotel:{
		type:String,
		required:true
	},
	rating:Number,
	price:String,
	location:{
		type:String,
		required:true
	}
});

module.exports = mongoose.model('Hotel', hotelSchema)
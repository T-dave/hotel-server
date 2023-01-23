var mongoose = require('mongoose');

const connectDB = ()=>{
	try{
		mongoose.connect("mongodb+srv://t-dave:Chibuzor22@cluster0.aeen3kp.mongodb.net/CompanyDB?retryWrites=true&w=majority", {
			UseUnifiedTopology:true,
			useNewUrlParser:true,
});
	}catch(err){
		 console.error(err);
	}
	
}

module.exports = connectDB

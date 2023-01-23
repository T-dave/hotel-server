var mongoose = require('mongoose');

const connectDB = ()=>{
	try{
		mongoose.connect(String(process.env.DATABASE_URI), {
			UseUnifiedTopology:true,
			useNewUrlParser:true,
});
	}catch(err){
		 console.error(err);
	}
	
}

module.exports = connectDB

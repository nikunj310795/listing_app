mongoose=require('mongoose');


var business_schema = new mongoose.Schema({
	picture: String,
	company: String,
	email: String,
	website:String,
	phone: String,
	street_address: String,
	city:String,
	state:String,
	zip:String,
	phrase:String,
	about:String,
	latitude: Number,
	longitude: Number,
	category:String
});

module.exports=mongoose.model('Business', business_schema);
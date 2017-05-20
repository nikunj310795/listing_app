var faker=require('Faker');

var mongoose=require('mongoose'),
    Business= require('./models/business');

mongoose.connect("mongodb://localhost/listing");


var category=['software','furnishing','dealership','restaurant','accounting'];


data=[];

for(var i=0;i<7;i++){

	content={
		picture: 'http://www.lorempixel.com/480/640/business/'+i,
		company: faker.Company.companyName(),
		email: faker.Internet.email(),
		website:faker.Internet.domainName(),
		phone: faker.PhoneNumber.phoneNumber(),
		street_address: faker.Address.streetAddress(),
		city:faker.Address.city(),
		state:faker.random.us_state(),
		zip:faker.Address.zipCode(),
		phrase:faker.Company.catchPhrase(),
		about:faker.Lorem.paragraph(),
		latitude: faker.Address.latitude(),
		longitude: faker.Address.longitude(),
		category:category[Math.floor(Math.random()*category.length)]
	}

	data.push(content);

}

function seedDB(){
	Business.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
			console.log("Removed Businesses");
			data.forEach(function(card){
				Business.create(card,function(err,card_db){
				if(err){
						console.log(err);
						}
				});
			});
		}
		
	});
}

module.exports=seedDB;
var express=require("express"),
    app=express(),
    mongoose=require('mongoose'),
    Card= require('./models/business'),
    seedDB= require('./seed');


app.use(express.static(__dirname+"/public"));
mongoose.connect("mongodb://localhost/listing");

seedDB();

app.set('view engine','ejs');

app.get('/',function(req,res){

	res.redirect('/home');

		
});

app.get('/home/:cat/:id',function(req,res){

	Card.findById(req.params.id,function(err,foundCard){
		if(err){
			console.log(err);
		} else {
			//console.log(foundCard);
			res.render("show",{card:foundCard});
		}
	});
});

app.get('/home/:cat',function(req,res){

	Card.find({'category':req.params.cat}, function(err,cards){
		if(err){
			console.log(err);
		} else {
			//console.log(campgrounds[0].comments);
			res.render('home',{cards:cards});
		}
	});
});


app.get('/home',function(req,res){

	Card.find({},function(err,cards){
		if(err){
			console.log(err);
		} else {
			//console.log(campgrounds[0].comments);
			res.render('home',{cards:cards});
		}
	});
});





app.get('/:id')

app.listen(3000,function(){
	console.log("Server running at port 3000");
});
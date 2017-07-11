var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect("mongodb://localhost/primera_web");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//definir el schema denuestro producto
var productSchema = {
	title:String,
	description:String,
	imageUrl:String,
	pricing: Number
};

var Product = mongoose.model("Product", productSchema);

app.set("view engine", "jade");

app.use(express.static("public"));

app.get("/", function(solicitud, respuesta){
	respuesta.render("index");
});

app.post("/menu", function(solicitud, respuesta){
	console.log(solicitud.bodyParser);

	var data = {
		title: solicitud.body.title,
		description: solicitud.body.description,
		imageUrl: "imagen.jpg",
		pricing: solicitud.body.pricing
	}

	var product = Product(data);

	product.save(function(err){
		console.log(product);
		respuesta.render("index");
	});

});

app.get("/menu/new", function(solicitud, respuesta){
respuesta.render("menu/new");
});

app.listen(8085);
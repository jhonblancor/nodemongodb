//crear variable express, exportando la funcionalidad el framework express
var express = require('express');

//importamnos mongoose 
var mongoose = require('mongoose');
//nos conectamos a mongodb
var mongoose = mongoose.connect("mongodb://localhost:27017/primera_web");


//definir el esquema de nuestros productos --> en este caso
//todos los campos que va a tener y tipo
var productSchema = {
	title:String,
	descripcion:String,
	imageUrl:String,
	pricing:Number
};
//teniendo el esquema se podria general el modelo
//Product el nombre de registro que se van a guardar en mongodb
//que seria como la tabla, como segundo parametro productSchema
var Product = mongoose.model("Product", productSchema);

//guardar el framework en variable app
var app = express();

//decirle al explorador que el engine de las vista va hacer jade
app.set("view engine","jade");

//utilizaremos una carpeta estatica, donde guardaremos 
//todo eso que no vallamos a mover y que utlizamos como un recuerso
//para construir la pagina
app.use(express.static("public"));


//app.get--> le decimos que vamos a recibir peticiones en esta url por medio del metodo get
//"/"indica que es solo el dominio sin otra pagina
//function cuando accedemos a esta pagina mandamos a llamar esa funcion
//la que recibe dos parametos (req, res): req la solictud como que parametros mando el usuario, de que navegador viene
//que peticion trae, y el segundo parametro que es la respuesta res, es lo que vamos a responder,  que puede ser con una pagina web
//un string
//con res.end o res.send('hola mundo') mandamos informacion pero no decimos que ya terminamos
app.get("/",function(solictud, respuesta){
//la respuesta que damos la renderizamos

//despues de ingresar al home de la pagina ingresaremos un producto
/*var data = {
	title:"Mi primer super producto",
	descripcion:"Una mega compra",
	imageUrl:"data.png",
	pricing:10
}
var product = new Product(data);
product.save(function(err){
console.log(product);
});*/

respuesta.render('index');
});

app.get("/menu/new",function(solictud, respuesta){
respuesta.render("menu/new");
});
//le decimos por el puerto que escucha
app.listen(8085);
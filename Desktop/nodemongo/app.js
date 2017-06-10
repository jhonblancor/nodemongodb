var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basedatonode',function(error){
if(error){
	throw error;
}else{
	console.log('Conectado a MongoDB')
}
});

const express = require('express');
const app = express();

app.listen(3000, function(){
console.log('conectado al peurto 3000');
});

app.get('', (req, res) => {
app.get('/', function(req, res){
res.send('Waoo Estoy conectado a Mongodb');
})
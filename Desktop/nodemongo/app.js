var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basedatonode',function(error){
if(error){
	throw error;
}else{
	console.log('Conectado a MongoDB')
}
});



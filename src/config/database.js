const mongoose = require('mongoose');
/*
var uriDb = 'mongodb+srv://xablau:xablau@cluster0-lteq2.mongodb.net/test?retryWrites=true&w=majority';
module.exports = mongoose.connect(uriDb, function(err, db) {
   db.close();
});*/
module.exports = mongoose.connect('mongodb+srv://xablau:xablau@cluster0-lteq2.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
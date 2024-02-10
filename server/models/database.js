const mongoose = require('mongoose');

// Replace 'your_mongodb_uri' with your actual MongoDB URI
const mongoURI = 'mongodb+srv://sahdevit:mongodb787898@cluster0.elehpuc.mongodb.net/';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');

 const express = require('express');
 const mongoose = require('mongoose');
 const morgan = require('morgan');
 const path = require('path');
 const cors = require('cors')
 const app = express();

  app.set('port', 3000);

 mongoose.connect('mongodb://localhost:27017/mevn-course', { useNewUrlParser: true })
    .then(db => console.log(`[OK] ${db} is connected`))
    .catch(e => console.log(e))
   
 app.use(cors())
 app.use(express.json());
 app.use(express.urlencoded({extended: false}));
 app.use(morgan('dev'));

 app.use('/api/records', require('./routes/records'));
 app.use('/', express.static(path.join(__dirname, '../dist')));
 
 app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
 });
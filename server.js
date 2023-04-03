const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const srv = express();

//? parse body
srv.use(bodyParser.urlencoded({ extended: true }));

//? service routes
srv.use('/', require('./routes/auth'));

//? listen
srv.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

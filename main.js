'use strict';

require('dotenv').config();
const server = require('./server');

server.listen(process.env.PORT, () => {
  console.log('beer server running', process.env.PORT);
});

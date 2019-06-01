let express = require('express');
let app = express();
let httpServer = require('http').createServer(app);

httpServer.listen(8000);

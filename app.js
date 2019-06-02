let express = require('express');
let app = express();
let httpServer = require('http').createServer(app);
let handleRouting = require('./routing/handleRouting');

app.set('views', './views');
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));


handleRouting(app);

httpServer.listen(8000);

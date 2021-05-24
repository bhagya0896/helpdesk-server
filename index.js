const express = require('express');
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const cors = require('cors');

// Routes
const getRoute = require('./routes.js');
const registerRoute = require('./routes.js');
const loginRoute = require('./routes.js');
const activateRoute = require('./routes.js');
const ticketsRoute= require('./routes.js');
const addTicketRoute = require('./routes.js');
const deleteTicketRoute = require('./routes.js');
const addContactFormRoute = require('./routes.js');

const port = process.env.PORT|| 5000

//Middleware
app.use(express.json());
app.use(cors());

app.use('/user', getRoute);
app.use('/user', registerRoute);
app.use('/user', loginRoute);
app.use('/user', activateRoute);
app.use('/user', ticketsRoute);
app.use('/user', addTicketRoute);
app.use('/user', deleteTicketRoute);
app.use('/user', addContactFormRoute);


// setting up of port

    app.listen(port,()=>
    {
        console.log(`Connection is established and app started running on port : ${port}!!!`)
  
    })




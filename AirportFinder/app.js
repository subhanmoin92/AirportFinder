//add list of dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


Airport = require('./mongooseModels/airport'); //getting the aiport database
State = require('./mongooseModels/state');      //getting the state database

const app = express();    //app variable
const port = 3000;        //port number

//mongoose connecting to database
mongoose.connect('mongodb://localhost/AirportFinder');
let db = mongoose.connection;

//CORS
app.use((req, res, next) => {
    //Website you wish to allow to connecting
    res.setHeader('Access-Control-Allow-Origin', '*');
    //request methods you wish to Allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //request headers you wish to Allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

//static folder
app.use(express.static(__dirname+' /client'));
//body Parser
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Use the /api/airports or api/states');
});

/**********************************
CREATE ROUTES
**********************************/
//airports
app.get('/api/airports', function(req,res){
  Airport.getAirports(function(err, docs){
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(docs);
  });
});

//states
app.get('/api/states', function(req,res){
  State.getStates(function(err, docs){
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(docs);
  });
});

//Getting Airports by States
app.get('/api/airports/state/:state', function(req,res){
  Airport.getAirportsByState(req.params.state, function(err, docs){
      if(err){
        console.log(err);
        res.send(err);
      }
      res.json(docs);
    });
});



//running the server
app.listen(port, function(){
  console.log('Server started on port:' +port);
})

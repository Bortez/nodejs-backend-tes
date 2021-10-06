var express = require('express');

const cors = require("cors");
var app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const { MongoClient } = require('mongodb');
const connectionString = "mongodb+srv://expressdb:expressdb@cluster0.80560.mongodb.net/cluster0?retryWrites=true&w=majority";

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('backenddb')
        const table = db.collection("articles");

    })
    .catch(error => console.error(error))

app.get("/articles", (req, res) => {
    table.find().toArray()
        .then(results => {
            console.log(results)
            res.send( results);
        })
        .catch(error => console.error(error))
    // ...
});




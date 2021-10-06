const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.articles = require("./article.model.js")(mongoose);
db.comments = require("./comment.model.js")(mongoose);

module.exports = db;
module.exports = app => {
    const comment = require("../controllers/comment.controller.js");

    var router = require("express").Router();

    // Create a new Article
    router.post("/", comment.create);

    // Retrieve all comment
    router.get("/", comment.findAll);

    // Retrieve a single Article with id
    router.get("/:id", comment.findOne);

    // Update a Article with id
    router.put("/:id", comment.update);

    // Delete a Article with id
    router.delete("/:id", comment.delete);

    // Create a new Article
    router.delete("/", comment.deleteAll);

    app.use('/api/comment', router);
};
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            post: String,
            article_id: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const comment = mongoose.model("comment", schema);
    return comment;
};
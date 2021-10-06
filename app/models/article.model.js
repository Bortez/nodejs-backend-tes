module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            post: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const article = mongoose.model("article", schema);
    return article;
};
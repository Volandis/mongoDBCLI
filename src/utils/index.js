class Movie {
    constructor (title, actor = "NotSpecified") {
    this.title = title;
    this.actor = actor;
    }

    async add (collection) {
        await collection.insertOne(this)
        return "Success";
        //add this to the database
    }

    async list (collection) {
        return await collection.find().toArray();
        //list all movies in the db
    }
 }

 module.exports = Movie;
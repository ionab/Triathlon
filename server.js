const express = require("express");
const app = express();
const parser = require("body-parser");

const port = 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) next(err);
    const db = client.db("favoritesDB");
    console.log("Connected to db...");

    app.get("/api/favorites", (req, res, next) => {
      const favoritesCollection = db.collection("favorites");
      favoritesCollection.find().toArray((err, favorites) => {
        if (err) next(err);
        res.json(favorites);
      });
    });

    app.post("/api/favorites", (req, res, next) => {
      const favoritesCollection = db.collection("favorites");
      console.log(req.body);
      const newFavorite = req.body;
      favoritesCollection.insert(newFavorite, (err, result) => {
        if (err) next(err);
        res.status(201);
        res.json(result.ops[0]);
      });
    });

    app.listen(port, () => {
      console.log("App listening on port", port);
    });
  }
);

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
    const db = client.db("favouritesDB");
    console.log("Connected to db...");

    app.get("/api/favourites", (req, res, next) => {
      const favouritesCollection = db.collection("favourites");
      favouritesCollection.find().toArray((err, favourites) => {
        if (err) next(err);
        res.json(favourites);
      });
    });

    app.post("/api/favourites", (req, res, next) => {
      const favouritesCollection = db.collection("favourites");
      console.log(req.body);
      const newFavourite = req.body;
      favouritesCollection.insert(newFavourite, (err, result) => {
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

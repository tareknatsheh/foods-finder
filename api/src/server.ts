
import * as dotenv from 'dotenv';
import express, { Application } from "express";
import path from "path";
import mongoose from "mongoose";
import Rests from "./models/restaurant";
import dummydata from "./seeds/dummydata";

dotenv.config();

const app: Application = express();
// 'mongodb://127.0.0.1:27017/foods-finder'

mongoose.connect(process.env["MONGODB_URI"])
    .then(() => console.log("MongoDB db connected!"))
    .catch(error => console.log(error));

app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../app/build')));


app.get("/api", (req, res) => {
    res.json({ message: "Hello hello from server!" });
});

// Get all the restaurants in the database:
app.get("/api/restaurants", async (req, res) => {
    try {
        const allRests = await Rests.find({});
        res.json(allRests);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Add new restaurant to database:
app.post("/api/restaurants", async (req, res) => {
    try {
        const newRest = new Rests(req.body);
        const saveResp = await newRest.save();
        console.log(saveResp);

        res.send(saveResp);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get one restaurant by id:
app.get("/api/restaurants/:id", async (req, res) => {
    try {
        const requestedRest = await Rests.findById(req.params.id);
        res.json(requestedRest);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Delete a restaurant from database:
app.delete("/api/restaurants/:id", async (req, res) => {
    try {
        const deleteResp = await Rests.findByIdAndDelete(req.params.id);
        console.log(deleteResp);
        res.send(deleteResp);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Edit a restaurant by ID:
app.put("/api/restaurants/:id", async (req, res) => {
    try {
        const editResp = await Rests.findByIdAndUpdate(req.params.id, { ...req.body })
        console.log(editResp);
        res.send(editResp);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// app.post("/api/seed", async (req, res) => {
//     await Rests.deleteMany({});
//     if (dummydata.length !== 0) await Rests.insertMany(dummydata);

//     res.send(`done seeding ${dummydata.length}`);
// });

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../app/build', 'index.html'));
});

const PORT: number = parseInt(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`);
})
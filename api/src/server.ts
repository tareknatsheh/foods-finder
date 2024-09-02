
import * as dotenv from 'dotenv';
import express, { Express, Response } from "express";
import path from "path";
import mongoose from "mongoose";
import Rests from "./models/restaurant";
import dummydata from "./seeds/dummydata";
import sslRedirect from 'heroku-ssl-redirect';
// const restaurantsRoutes = require("./routes/restaurants");
import restaurantsRoutes from "./routes/restaurants";

dotenv.config();

const app: Express = express();

// enable ssl redirect
app.use(sslRedirect());
app.use(express.json());
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../app/build')));

const mongodbUri = process.env["MONGODB_URI"];
if(!mongodbUri)
{
    console.error("There is no MONGODB_URI in the environment variables.");
    process.exit(1);
}
mongoose.connect(mongodbUri)
    .then(() => console.log("MongoDB db connected!"))
    .catch(error => console.error(error));


// ------ Routes ------
// Sanity check
app.get("/api", (req, res: Response) => {
    res.json({ message: "Hello hello from server!" });
});
// restaurants endpoint
app.use("/api/restaurants", restaurantsRoutes);

app.post("/api/seed", async (req, res) => {
    await Rests.deleteMany({});
    if (dummydata.length !== 0) await Rests.insertMany(dummydata);

    res.send(`done seeding ${dummydata.length}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../app/build', 'index.html'));
});

const PORT: number = parseInt(process.env.PORT ?? "5000");
app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`);
})
import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";

const app: Application = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../app/build')));

// app.get("/", (req: Request, res: Response) => {
//     res.send("Hello");
// });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../app/build', 'index.html'));
});

const PORT: number = parseInt(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`);
})
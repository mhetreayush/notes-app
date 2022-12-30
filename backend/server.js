const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Api is running!");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((getNote) => getNote._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running on port ${PORT}`));

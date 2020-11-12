const mongoose = require("mongoose");
const express = require("express");

const port = process.env.PORT;
const uri = process.env.MONGO_URI;

const Test = mongoose.model(
  "Test",
  new mongoose.Schema({}, { timestamps: true })
);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: 1,
});

const app = express();

app.get("/list", async (req, res) => {
  const tests = await Test.find({}).exec();
  return res.json(tests);
});

app.get("/create", async (req, res) => {
  const test = new Test();
  const savedTest = await test.save();
  return res.json(savedTest);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!", test: hello() });
});

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});

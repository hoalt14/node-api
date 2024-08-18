const mongoose = require("mongoose");
const express = require("express");

const port = process.env.PORT;
const uri = process.env.MONGO_URI;

const testSchema = new mongoose.Schema({}, { timestamps: true });

const testModel = mongoose.model("testModel", testSchema);

mongoose.connect(uri);

const app = express();

app.get("/list", async (req, res) => {
  const test = await testModel.find({}).exec();
  return res.json(test);
});

app.get("/create", async (req, res) => {
  const test = new testModel();
  const saveModel = await test.save();
  return res.json(saveModel);
});

const { testMessage } = require("./test");

app.get("/", (req, res) => {
  res.json({
    author: "hoalt",
    topic: "Node API",
    version: "v1",
    "test other message": testMessage()
  });
});

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});

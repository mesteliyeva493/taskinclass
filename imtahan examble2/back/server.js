const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
const PORT = 4043;
app.use(express.json());

const foodShema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    img: String,
  },
  { timestamps: true }
);

const foodModel = mongoose.model("food", foodShema);

app.get("/api/food", async (req, res) => {
  try {
    const target = await foodModel.find();
    res.send(target);
  } catch (error) {
    res.send("error");
  }
});

app.get("/api/food/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const target = await foodModel.findById(id);
    res.send(target);
  } catch (error) {
    res.send("error");
  }
});

app.delete("/api/food/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const target = await foodModel.findByIdAndDelete(id);
    res.send(target);
  } catch (error) {
    res.send("error");
  }
});

app.post("/api/food", async (req, res) => {
  try {
    const { title, price, img } = req.body;
    const target = new foodModel({ title, price, img });
    await target.save();
    res.send(target);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
mongoose.connect("mongodb+srv://mesteliyeva004:mesteliyeva493@project.du4qrea.mongodb.net/").then(() => {
  console.log("connected");
});

app.listen(PORT, () => {
  console.log("back is run");
});

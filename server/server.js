const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
const dbRoute =
  "mongodb+srv://Artem:v00061490@cluster0-wsydf.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/watched", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, items: data });
  });
});

router.delete("/watched", (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ id: id });
  });
});

router.post("/watched", (req, res) => {
  let data = new Data();
  const { id, title, thumb } = req.body;
  if ((!id && id !== 0) || !title || !thumb) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.title = title;
  data.id = id;
  data.thumb = thumb;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json(data);
  });
});

app.use("/api", router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

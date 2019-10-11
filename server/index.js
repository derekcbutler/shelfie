require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.get("/api/products", ctrl.getClothes);
app.post("/api/products", ctrl.addClothes);
//   app.put('/api/clothesList', ctrl.editClothes);

app.listen(SERVER_PORT, () => {
  console.log(`Running on port: ${SERVER_PORT}`);
});

const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const actorsRouter = require("./routes/actor.router");
app.use("/api/actors", actorsRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
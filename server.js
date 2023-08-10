const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const actorsRouter = require("./routes/actor.router");
const usersRouter = require("./routes/user.router");
const authRouter = require("./routes/auth.router");
app.use("/api/actors", actorsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const { engine } = require("express-handlebars");
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ruteo de la API
const actorsRestRouter = require("./restRoutes/actor.router");
const usersRestRouter = require("./restRoutes/user.router");
const authRestRouter = require("./restRoutes/auth.router");

app.use("/api/actors", actorsRestRouter);
app.use("/api/users", usersRestRouter);
app.use("/api/auth", authRestRouter);


// ruteo de web
const actorRouter = require("./routers/actor.router");

app.use("/actors", actorRouter);


app.get("/", (req, res) => {
  res.render('home');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
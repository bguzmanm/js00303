const jwt = require("jsonwebtoken");
require("dotenv").config()

module.exports = (req, res, next) => {
  // extraemos la sección de autorización dentro del header, 
  // porque en ella se encuentra el token.
  let { authorization } = req.headers;

  if (!authorization) {
    console.log("no viene autorización");
    return res.status(401).json({ message: 'Unauthorized access' })
  }
  try {
    // obtenemos el prefijo y el token.
    let [type, token] = authorization.split(" ");
    // validamos que el prefijo sea Bearer o Tolen
    if (type === 'Bearer' || type === "Token") {
      // validamos con el SECRET que el token sea valido
      const openToken = jwt.verify(token, process.env.SECRET);
      console.log(openToken);

      next();
    } else {
      console.log("no viene prefijo");
      return res.status(401).json({ message: 'Unauthorized access' })
      return { code: 401, message: 'Unauthorized access' }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'we have an error' })
  }

}
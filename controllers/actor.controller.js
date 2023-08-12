const service = require("../service/actor.service");

exports.findAll = async (req, res) => {
  const result = await service.findAll();

  res.render('actors', {
    actors: result.map((actor) => {
      return actor.dataValues
    })
  });
}
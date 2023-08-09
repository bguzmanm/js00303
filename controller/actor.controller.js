const service = require("../service/actor.service");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content can not be empty' });
  }
  res.status(201).send({ message: 'actor created' });
}
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content can not be empty' });
  }
  if (!req.body.actor_id) {
    res.status(400).send({ message: 'content can not be empty' });
  }

  res.status(200).send({ message: 'actor updated' });
}
exports.findAll = async (req, res) => {
  const result = await service.findAll();
  if (result?.error !== undefined) {
    res.status(result.error.code).send({
      message: result.error.message || 'Some error ocurred while retrieving actors.',
    });
  }
  res.send(result);
}
exports.findOne = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: 'content can not be empty' });
  }
  const id = req.params.id;
  const result = await service.findOne(id);
  if (result?.error !== undefined) {
    res.status(result.error.code).send({
      message: result.error.message || 'Some error ocurred while retrieving one actor.',
    });
  }
  res.status(200).send(result);
}

exports.delete = (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: 'content can not be empty' });
  }
  res.status(200).send({ message: 'delete' });
}
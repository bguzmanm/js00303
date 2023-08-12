const service = require("../service/auth.service");

exports.signUp = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content can not be empty' });
  }
  const { username, password, firstName, lastName, email } = req.body;
  const result = await service.signUp(username, password, firstName, lastName, email);

  if (result?.error !== undefined) {
    res.status(result.error.code).send({
      message: result.error.message || 'Some error ocurred!',
    })
  }
  res.status(201).send(result);
}
exports.singIn = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content can not be empty' });
  }
  const { username, password } = req.body;

  const result = await service.singIn(username, password);
  console.log(result);
  if (result?.error !== undefined) {
    res.status(result.error.code).send({
      message: result.error.message || 'Some error ocurred!',
    })
  }
  res.status(200).json({ result });

}
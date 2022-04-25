import logins from "../model/login.js";

class LoginsController {
  //Método Read --------------------
  static getLogins = (req, res) => {
    logins.find((error, logins) => {
      if (error) {
        res.status(500).send({ message: `${error.message} - Fail search` });
      } else {
        res.status(200).json(logins);
      }
    });
  };

  //Método ReadById --------------------
  static getLoginsById = (req, res) => {
    const id = req.params.id;

    logins.findById(id, (error, logins) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Fail search by id` });
      } else {
        res.status(200).json(logins);
      }
    });
  };

  //Método Delete --------------------
  static deleteLogin = (req, res) => {
    const id = req.params.id;

    logins.findByIdAndDelete(id, (error) => {
      if (error) {
        res.status(404).send({ message: `${error.message} - Fail to delete` });
      } else {
        res.status(200).send({ message: `Login deleted with success.` });
      }
    });
  };

  //Método Update --------------------
  static updateLogin = (req, res) => {
    const id = req.params.id;

    logins.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - Fail to update` });
      } else {
        res.status(200).send({ message: `Login updated with success.` });
      }
    });
  };

  //Método Post --------------------
  static postLogin = (req, res) => {
    const login = new logins(req.body);

    login.save(login, (error) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - Fail to post` });
      } else {
        res.status(201).send(login.toJSON());
      }
    });
  };
}

export default LoginsController;

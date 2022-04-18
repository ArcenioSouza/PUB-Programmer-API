import drinks from "../model/drinks.js";

class DrinksController {
  //Metodo Read --------------------
  static getDrinks = (req, res) => {
    drinks.find((error, drinks) => {
      if (error) {
        res.status(500).send({ message: `${error.message} - Fail search` });
      } else {
        res.status(200).json(drinks);
      }
    });
  };

  //Metodo ReadById --------------------
  static getDrinksById = (req, res) => {
    const id = req.params.id;

    drinks.findById(id, (error, drinks) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Fail search by id` });
      } else {
        res.status(200).json(drinks);
      }
    });
  };

  //Método Delete --------------------
  static deleteDrink = (req, res) => {
    const id = req.params.id;

    drinks.findByIdAndDelete(id, (error) => {
      if (error) {
        res.status(404).send({ message: `${error.message} - Fail to delete` });
      } else {
        res.status(200).send({ message: `Drink deleted with success.` });
      }
    });
  };

  //Método Update --------------------
  static updateDrink = (req, res) => {
    const id = req.params.id;

    drinks.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - Fail to update` });
      } else {
        res.status(200).send({ message: `Drink updated with success.` });
      }
    });
  };

  //Método Post --------------------
  static postDrink = (req, res) => {
    const drink = new drinks(req.body);

    drink.save(drink, (error) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - Fail to post` });
      } else {
        res.status(201).send(drink.toJSON());
      }
    });
  };
}

export default DrinksController;

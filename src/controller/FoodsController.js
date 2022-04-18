import foods from "../model/foods.js";

class FoodsController {
  //Metodo Read --------------------
  static getFoods = (req, res) => {
    foods.find((error, foods) => {
      if (error) {
        res.status(500).send({ message: `${error.message} - Fail search` });
      } else {
        res.status(200).json(foods);
      }
    });
  };

  //Método ReadById --------------------
  static getFoodsById = (req, res) => {
    const id = req.params.id;

    foods.findById(id, (error, foods) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Fail search by id` });
      } else {
        res.status(200).json(foods);
      }
    });
  };

  //Método Delete --------------------
  static deleteFood = (req, res) => {
    const id = req.params.id;

    foods.findByIdAndDelete(id, (error) => {
      if (error) {
        res.status(404).send({ message: `${error.message} - Fail to delete` });
      } else {
        res.status(200).send({ message: `Food deleted with success.` });
      }
    });
  };

  //Método Update --------------------
  static updateFood = (req, res) => {
    const id = req.params.id;

    foods.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - Fail to update` });
      } else {
        res.status(200).send({ message: `Food updated with success.` });
      }
    });
  };

  //Método Post --------------------
  static postFood = (req, res) => {
    const food = new foods(req.body);

    food.save(food, (error) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - Fail to post` });
      } else {
        res.status(201).send(food.toJSON());
      }
    });
  };
}

export default FoodsController;

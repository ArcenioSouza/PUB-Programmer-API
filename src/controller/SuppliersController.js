import suppliers from "../model/supplier.js";

class SupplierControllers {
  //Método Read --------------------
  static getSuppliers = (req, res) => {
    suppliers.find((error, suppliers) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - Fail search` });
      } else {
        res.status(200).send(suppliers);
      }
    });
  };

  //Método ReadById --------------------
  static getSuppliersById = (req, res) => {
    const id = req.params.id;

    suppliers.findById(id, (error, suppliers) => {
      if (error) {
        res
          .status(404)
          .send({ message: `${error.message} - Fail search by id` });
      } else {
        res.status(200).send(suppliers);
      }
    });
  };

  //Método Delete --------------------
  static deleteSupplier = (req, res) => {
    const id = req.params.id;

    suppliers.findByIdAndDelete(id, (error) => {
      if (error) {
        res.status(404).send({ message: `${error.message} - Fail to delete` });
      } else {
        res.status(200).send({ message: `Supplier deleted with success.` });
      }
    });
  };

  //Método Update --------------------
  static updateSupplier = (req, res) => {
    const id = req.params.id;

    suppliers.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (error) {
        res.status(400).send({ message: `${error.message} - Fail to update` });
      } else {
        res.status(200).send({ message: `Supplier updated with success` });
      }
    });
  };

  //Método Post --------------------
  static postSupplier = (req, res) => {
    const supplier = new suppliers(req.body);

    supplier.save((error) => {
      if (error) {
        res.status(500).send({ message: `${error.message} - Fail to post` });
      } else {
        res.status(201).send(supplier);
      }
    });
  };
}

export default SupplierControllers;

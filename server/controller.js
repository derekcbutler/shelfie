module.exports = {
  getClothes(req, res, next) {
    const db = req.app.get("db");

    db.get_inventory()
      .then(dbResponse => res.status(200).send(dbResponse))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
      });
  },

  addClothes(req, res) {
    const { name, price, url } = req.body;
    const db = req.app.get("db");
    db.post_inventory(name, price, url)
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => res.status(500).send(err));
  }

  // editClothes(req, res) {
  //     const { id, name, price, url } = req.body;
  //     clothesList[id].name = name;
  //     clothesList[id].price = price;
  //     clothesList[id].url = url;
  //     res.status(200).send(clothesList);
  // }
};

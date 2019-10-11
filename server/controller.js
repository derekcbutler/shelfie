let clothesList = [
  {
    id: 1,
    name: 'hey',
    price: 5,
    url: 'hi.com'
  },
  {
    id: 2,
    name: 'dude',
    price: 6,
    url: 'sup.org'
  },
  {
    id: 3,
    name: 'sup',
    price: 7,
    url: 'yo.jpg'
  }
];

// let id = 4;

module.exports = {
    getClothes(req, res) {
        res.status(200).send(clothesList);
    },

    addClothes(req, res) {
        const { name, price, url } = req.body;

        const newClothes = {
            id,
            name,
            price,
            url
        };

        id++;

        clothesList.push(newClothes);

        res.status(200).send(clothesList);
    }

    // editClothes(req, res) {
    //     const { id, name, price, url } = req.body;
    //     clothesList[id].name = name;
    //     clothesList[id].price = price;
    //     clothesList[id].url = url;
    //     res.status(200).send(clothesList);
    // }
}
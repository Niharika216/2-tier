let exObj = require("./ex");

exObj.internalModules();

let express = require("express");
let cors = require("cors");
let path = require("path");

let app = express();
app.use(cors());

app.get("/results", (req, res) => {
  let marksArr = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
      category: "men's clothing",
      image:"https://i.pinimg.com/originals/c0/29/6c/c0296c1699c6dfb4404f73bb58d6600b.png",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://th.bing.com/th/id/OIP.iTtCdo2MWG8Jg93bWoswpwAAAA?rs=1&pid=ImgDetMain",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 25.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://th.bing.com/th/id/OIP.V3F0LkcWgCSh4FRJrawxkwAAAA?rs=1&pid=ImgDetMain",
      rating: {
        rate: 4.5,
        count: 265,
      },
    },
  ];
  res.json(marksArr);
});
app.listen(1918, () => {
  console.log("listening to port 1918");
});

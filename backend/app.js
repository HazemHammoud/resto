const express = require('express');
const app = express();
// importation de mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restoJuin');

// importation bcrypt
const bcrypt = require('bcrypt');

// importation axios
const axios = require('axios');


// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// import body parser module
const bodyParser = require("body-parser");
// Prepare Response to JSON Object
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));


const Plat = require('./models/plat');
const Chef = require('./models/chef');
const User = require('./models/user');
const Order = require('./models/order');

// Business Logig get all plats
app.get('/plats', (req, res) => {
  console.log('here into get all plats');
  // let platsArrays = [
  //   { id: 1, name: "couscous", price: 12, description: "plat tunisien", image: "assets/img/food_menu/single_food_1.png" },
  //   { id: 2, name: "salade tunisienne", price: 4, description: "salade", image: "assets/img/food_menu/single_food_6.png" },
  //   { id: 3, name: "Steak viande", price: 16, description: "Grillade", image: "assets/img/food_menu/single_food_3.png" },
  //   { id: 4, name: "ma9loub", price: 6, description: "Sandwitch", image: "assets/img/food_menu/single_food_4.png" },
  //   { id: 5, name: "escalope grillé", price: 12, description: "Grillade", image: "assets/img/food_menu/single_food_5.png" }
  // ];
  Plat.find((err, docs) => {
    if (err) {
      console.log('Error into DB', err);
    }
    else {
      res.status(200).json({ allPlats: docs });

    }
  });
  //404 not found
  //200 ok
  //500 server error
  //401 server non authorized

});

app.get('/chefs', (req, res) => {
  // let chefsArrays = [
  //   { id: 1, name: "ahmed mabrouk", speciality: "Cuisine tunisienne", image: "assets/img/team/chefs_1.png" },
  //   { id: 2, name: "faysel rahmani", speciality: "Sandwitch", image: "assets/img/team/chefs_2.png" },
  //   { id: 3, name: "mohamed rekik", speciality: "Pizza", image: "assets/img/team/chefs_3.png" },
  //   { id: 4, name: "abdallah smida", speciality: "Salade", image: "assets/img/team/chefs_1.png" },
  //   { id: 5, name: "mabrouk hafyane", speciality: "Grillade", image: "assets/img/team/chefs_2.png" },
  // ];
  Chef.find((err, docs) => {
    if (err) {
      console.log('error', err);
    } else {
      res.status(200).json({ allChefs: docs });

    }
  })
});

app.get('/users', (req, res) => {
  // let usersArrays = [
  //   { id: 1, firstName: "ahmed", lastName: "ayadi", email: "ahmed@gmail.com", tel: 22111111, adresse: "Tunis" },
  //   { id: 2, firstName: "aymen", lastName: "trabelsi", email: "aymen@gmail.com", tel: 22222222, adresse: "BenArouss" },
  //   { id: 3, firstName: "sirine", lastName: "abdallah", email: "sirine@gmail.com", tel: 22333333, adresse: "Manouba" },
  //   { id: 4, firstName: "imen", lastName: "srayri", email: "imen@gmail.com", tel: 22444444, adresse: "Ariana" },
  //   { id: 5, firstName: "samir", lastName: "mokni", email: "samir@gmail.com", tel: 22555555, adresse: "Bizerte" }
  // ];
  User.find((err, docs) => {
    if (err) {
      console.log('error', err);
    } else {
      res.status(200).json({ allUsers: docs });
    }
  })

});


app.get('/chefs/:id', (req, res) => {
  // console.log('here into get chef by id');
  // console.log('here id', req.params.id);
  // let chefsArrays = [
  //   { id: 1, name: "ahmed mabrouk", speciality: "Cuisine tunisienne", image: "assets/img/team/chefs_1.png" },
  //   { id: 2, name: "faysel rahmani", speciality: "Sandwitch", image: "assets/img/team/chefs_2.png" },
  //   { id: 3, name: "mohamed rekik", speciality: "Pizza", image: "assets/img/team/chefs_3.png" },
  //   { id: 4, name: "abdallah smida", speciality: "Salade", image: "assets/img/team/chefs_1.png" },
  //   { id: 5, name: "mabrouk hafyane", speciality: "Grillade", image: "assets/img/team/chefs_2.png" },
  // ];
  // let searchedChef;
  // for (let i = 0; i < chefsArrays.length; i++) {
  //   if (chefsArrays[i].id == req.params.id) {
  //     searchedChef = chefsArrays[i];
  //     break;
  //   }
  // }
  Chef.findOne({ _id: req.params.id }).then(
    (result) => {
      if (result) {
        res.status(200).json({ chef: result });
      }
    }
  )
});

app.get('/users/:id', (req, res) => {
  // console.log('here into get user by id');
  // console.log('here id', req.params.id);
  // let usersArrays = [
  //   { id: 1, firstName: "ahmed", lastName: "ayadi", email: "ahmed@gmail.com", tel: 22111111, adresse: "Tunis" },
  //   { id: 2, firstName: "aymen", lastName: "trabelsi", email: "aymen@gmail.com", tel: 22222222, adresse: "BenArouss" },
  //   { id: 3, firstName: "sirine", lastName: "abdallah", email: "sirine@gmail.com", tel: 22333333, adresse: "Manouba" },
  //   { id: 4, firstName: "imen", lastName: "srayri", email: "imen@gmail.com", tel: 22444444, adresse: "Ariana" },
  //   { id: 5, firstName: "samir", lastName: "mokni", email: "samir@gmail.com", tel: 22555555, adresse: "Bizerte" }
  // ];
  // let searchedUser;
  // for (let i = 0; i < usersArrays.length; i++) {
  //   if (usersArrays[i].id == req.params.id) {
  //     searchedUser = usersArrays[i];
  //     break;
  //   }
  // }
  User.findOne({ _id: req.params.id }).then(
    (result) => {
      if (result) {
        res.status(200).json({ user: result });
      }
    }
  )
});


app.get('/plats/:id', (req, res) => {
  // console.log('here into get plat by id');
  // console.log('here id', req.params.id);
  // let platsArrays = [
  //   { id: 1, name: "couscous", price: 12, description: "plat tunisien", image: "assets/img/food_menu/single_food_1.png" },
  //   { id: 2, name: "salade tunisienne", price: 4, description: "salade", image: "assets/img/food_menu/single_food_6.png" },
  //   { id: 3, name: "Steak viande", price: 16, description: "Grillade", image: "assets/img/food_menu/single_food_3.png" },
  //   { id: 4, name: "ma9loub", price: 6, description: "Sandwitch", image: "assets/img/food_menu/single_food_4.png" },
  //   { id: 5, name: "escalope grillé", price: 12, description: "Grillade", image: "assets/img/food_menu/single_food_5.png" }
  // ];
  // let searchedPlat;
  // for (let i = 0; i < platsArrays.length; i++) {
  //   if (platsArrays[i].id == req.params.id) {
  //     searchedPlat = platsArrays[i];
  //     break;
  //   }
  // }
  Plat.findOne({ _id: req.params.id }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          plat: result
        });

      }
    }
  )
});


app.delete('/users/:id', (req, res) => {
  // console.log('here into delete user by id');
  // console.log('here into delete user', req.params.id);
  // res.status(200).json({ message: `this ${req.params.id} is deleted succesfully` });
  User.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('result after delete', result)
      if (result) {
        res.status(200).json({
          message: 'object deleted with succes'
        });

      }
    }
  )
});

app.delete('/plats/:id', (req, res) => {
  // console.log('here into delete plat by id');
  // console.log('here into delete plat', req.params.id);
  // res.status(200).json({ message: `this ${req.params.id} is deleted succesfully` });
  Plat.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('result after delete', result)
      if (result) {
        res.status(200).json({
          message: 'object deleted with succes'
        });

      }
    }
  )
});

app.delete('/chefs/:id', (req, res) => {
  // console.log('here into delete chef by id');
  // console.log('here into delete chef', req.params.id);
  // res.status(200).json({ message: `this ${req.params.id} is deleted succesfully` });
  Chef.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('result after delete', result)
      if (result) {
        res.status(200).json({
          message: 'object deleted with succes'
        });

      }
    }
  )
});

app.post('/plats', (req, res) => {
  console.log('here into add plat', req.body);
  //save to DataBase
  const plat = new Plat({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });
  plat.save().then((result) => {
    console.log('Result after save', result);
    if (result) {
      res.status(200).json({
        message: 'plat added with success'
      });
    }
  });
});

app.post('/chefs', (req, res) => {
  console.log('here into add chef', req.body);
  //save to DataBase
  const chef = new Chef({
    name: req.body.name,
    speciality: req.body.speciality,
    note: req.body.note
  });
  chef.save().then((result) => {
    console.log('Result after save', result);
    if (result) {
      res.status(200).json({
        message: 'chef added with success'
      });
    }
  });

});

app.post('/users/signup', (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then(
    (cryptedPwd) => {
      console.log('cryptedPwd', cryptedPwd);
      console.log('here into add user', req.body);
      //save to DataBase
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        pwd: cryptedPwd,
        role: req.body.role

      });
      user.save().then((result) => {
        console.log('Result after save', result);
        if (result) {
          res.status(200).json({
            message: 'user added with success'
          });
        }
      }
      )

    });
});

app.put('/plats/:id', (req, res) => {
  console.log('here into edit plat', req.body);
  console.log('here into id Plat', req.params.id);
  const newPlat = new Plat({
    _id: req.body._id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });
  Plat.updateOne({ _id: req.params.id }, newPlat).then(
    (result) => {
      console.log('result after update', result);
      if (result) {
        res.status(200).json({
          message: 'Plat edited with success'
        });
      }
    }
  )
});

app.put('/chefs/:id', (req, res) => {
  console.log('here into edit chef', req.body);
  console.log('here into id chef', req.params.id);

});

app.put('/users/:id', (req, res) => {
  console.log('here into edit user', req.body);
  console.log('here into id user', req.params.id);

});

app.post('/chefs/search', (req, res) => {
  console.log('here into search', req.body.speciality);
  Chef.find({ speciality: req.body.speciality }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          findedChefs: result
        });
      }
    }
  )
});



app.post('/users/login', (req, res) => {
  console.log('here into login', req.body);
  User.findOne({ email: req.body.email }).then(
    (resultEmail) => {
      console.log('Result after login', resultEmail);
      if (!resultEmail) {
        res.status(200).json({
          message: '0'
        });
      }
      return bcrypt.compare(req.body.pwd, resultEmail.pwd)
    }
  ).then(
    (resultPwd) => {
      console.log('here resultPwd', resultPwd);
      if (!resultPwd) {
        res.status(200).json({
          message: '1'
        });
      }
      User.findOne({ email: req.body.email }).then(
        (result) => {
          let userTosend = {
            id: result._id,
            firstName: result.firstName,
            lastName: result.lastName,
            role: result.role
          }
          res.status(200).json({
            message: '2',
            user: userTosend
          });
        }
      )
    }
  )
});




app.get('/orders', (req, res) => {
  console.log('here into get all orders');
  Order.find((err, docs) => {
    if (err) {
      console.log('Error into DB', err);
    }
    else {
      res.status(200).json({ allOrders: docs });
    }
  });
});

app.delete('/orders/:id', (req, res) => {

  Order.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('result after delete', result)
      if (result) {
        res.status(200).json({
          message: 'object deleted with succes'
        });

      }
    }
  )
});

app.get('/orders/:id', (req, res) => {
  console.log('here to find user orders', req.params.id);
  Order.find({ idUser: req.params.id }).then(
    (result) => {
      console.log('here result, result');
      if (result) {
        ids = result.map((obj) => { return obj.idPlat });
        console.log('ids', ids);
        Plat.find({ _id: { $in: ids } }).then(

          (findedPlats) => {
            res.status(200).json({
              myOrders: findedPlats
            })
          }
        )
      }
    })
});

app.post('/orders', (req, res) => {
  console.log('here into add order', req.body);
  //save to DataBase
  const order = new Order({
    idPlat: req.body.idPlat,
    idUser: req.body.idUser
  });
  order.save().then((result) => {
    console.log('Result after save', result);
    if (result) {
      res.status(200).json({
        message: 'order added with success'
      });
    }
  });
});


app.post('/weather', (req, res) => {
  console.log('here into weather', req.body);
  const city = req.body.city;
  const apiKey = "62ee756a34835483299877a61961cafb";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey + "&units=metric";

  axios
    .get(apiUrl)
    .then((response) => {
      console.log('Here response', response);
      const weather = response.data.main;
      console.log('Here weather main', weather);
      const result = {
        temp: weather.temp,
        pressure: weather.pressure,
        humidity: weather.humidity
      }
      res.status(200).json({
        weatherCity: result
      })
    });

});





module.exports = app;

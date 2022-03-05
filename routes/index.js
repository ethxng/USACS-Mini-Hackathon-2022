var express = require('express');
var router = express.Router();
const { body,validationResult } = require('express-validator');

// sample data, more will be added
var all = [
  {
      "users": "ethanng",
      "year": 2025,
      "landlord": "Adam Mclovin",
      "property": "256 Hamilton St, New Brunswick, NJ 08901",
      "review": "the landlord is nice. always available when help is needed",
      "ratings": 5.0
  },
  {
      "users": "tommy",
      "year": 2025,
      "landlord": "Bobby Bob Bob",
      "property": "110 Somerset St, New Brunswick, NJ 08901",
      "review": "landlord doesn't allow partying",
      "ratings": 3.5
  },
  {
      "users": "user3",
      "year": 2025,
      "landlord": "John Doe",
      "property": "272 Hamilton St Apartment 91, New Brunswick, NJ 08901",
      "review": "landlord plays on the pool table all day",
      "ratings": 1.2
  }
];

/* GET home page. */
// this page will display all reviews 
router.get('/', function(req, res, next) {
  res.render('index', { welcome: "Welcome to Rate My Landlord", all: all});
});

// get data from this method
router.post('/users',
  (req, res, next) => {
    let review = (req.body.review);
    console.log(review);
    let newReview = {
      "users": req.body.username,
      "year": req.body.class,
      "landlord": req.body.landlord,
      "property": req.body.property,
      "review": review,
      "ratings": req.body.rating
    }
    console.log(req.body.property);
    console.log(req.body.rating);
    all.push(newReview);
    res.redirect('/');
  }
);

module.exports = router;

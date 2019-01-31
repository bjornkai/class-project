const express = require('express');
const router  = express.Router();


const Book = require('../models/book-model');

const Author = require('../models/author-model');

// get() => to display the form to create a new book
router.get('/create', (req, res, next) => {
  Author.find()
  .then(theAuthors => {
    res.render('books-views/new-book', { authorsFromDB: theAuthors });
  })
  .catch(err => console.log('Error while displaying a form to create a new book: ', err));
})

router.post('/create', (req, res, next) => {
  // console.log('The data from the form: ', req.body)

  Book.create({
    // left side are the keys of the book model : right side are the name we gave in our form in the 'name = _______'
    title: req.body.theTitle,
    description: req.body.theDescription,
    author: req.body.theAuthor,
    rating: req.body.theRating,
    image_url: req.body.theImage
  })
    .then( newBook => {
      console.log('New book created: ', newBook)
    })
    .catch( err => console.log('Error while creating a new book :', err))
})

module.exports = router;

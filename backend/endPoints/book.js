var express = require('express');
var router = express.Router();
const control = require('../controller/bookControllers');

router.post('/addBook',control.addBook);
router.get('/getAllBooks',control.getAllBooks);
router.get('/getBook/:id',control.getBook);
router.put('/editBook',control.editBook);
router.delete('/deleteBook/:id',control.deleteBook);

module.exports = router;
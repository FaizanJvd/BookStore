const Book = require("../schemas/bookSchema");

module.exports = {
  addBook: async (req, res) => {
    try {
      await Book.create(req.body);
      res.status(200).json({
        message: "Book added successfully"
      });
    } catch (err) {
      res.status(404).json({
        message: "Book not added"
      });
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).send(books);
    } catch (err) {
      res.status(404).json({
        status: "fail",
      });
    }
  },
  getBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200).json({
        data: book
      });
    } catch (err) {
      res.status(404).json({
        message: "Book not found"
      });
    }
  },

  editBook: async (req, res) => {
    try {
      await Book.findByIdAndUpdate(
        { _id: req.body.id },
        {
          $set: {
            title: req.body.title,
            author: req.body.author,
            no_of_pages: req.body.no_of_pages,
            published_at: req.body. published_at,
          },
        }
      );
      res.status(200).json({
        message: "Book updated successfully"
      });
    } catch (err) {
      res.status(404).json({
        message: "Book not updated"
      });
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json({
        message: "Book deleted successfully"
      });
    } catch (err) {
      res.status(404).json({
        message: "Book not deleted"
      });
    }
  },
};

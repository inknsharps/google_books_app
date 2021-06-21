const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: {
		type: String,
		default: "Book title!"
	},
	authors: {
		type: Array,
		default: "Authors!"
	},
	description: {
		type: String,
		default: "Description!"
	},
	image: {
		type: String,
		default: "Image URL!"
	},
	link: {
		type: String,
		default: "Information URL!"
	}
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
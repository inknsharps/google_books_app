const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: {
		type: String,
		default: "Book title!"
	},
	authors: {
		type: String,
		default: "Authors!"
	},
	dscription: {
		type: String,
		default: "dscription!"
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
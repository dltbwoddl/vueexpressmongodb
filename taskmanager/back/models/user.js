const mongoose = require('mongoose');
const Schema = mongoose.Schema;
console.log('user.js')
const userSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
});
console.log(userSchema)
module.exports = mongoose.model('User', userSchema);
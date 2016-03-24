// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

module.exports = mongoose.model('Nerd', {
	name: {type: String, default: ''}
});

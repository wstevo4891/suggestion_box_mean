// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

module.exports = mongoose.model('Suggestion', {
	name: {type: String, default: ''}
});

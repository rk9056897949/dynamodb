const dynamoose = require('dynamoose');
const schema = new dynamoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String
}, { timestamps: true });

const User = dynamoose.model('User', schema);
module.exports = User;
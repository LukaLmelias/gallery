
var config = {}
var mongodb_password = process.env.MONGODB_PASSWORD

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://lmeliasluke:' + mongodb_password + '@cluster0.ilkoei3.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://lmeliasluke:' + mongodb_password + '@cluster0.ilkoei3.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://lmeliasluke:' + mongodb_password + '@cluster0.ilkoei3.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;


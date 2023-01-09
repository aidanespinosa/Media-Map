const User = require("./users");
const Movie = require("./movies");
const Save = require("./saves");
//const Service = require("./service");
//const Stream = require("./stream");



User.belongsToMany(Movie, {
  through: Save,
});

Movie.belongsToMany(User, {
  through: Save,
});



//Movie.belongsToMany(Service, { through: Stream });

//Service.belongsToMany(Movie, { through: Stream });

module.exports = {
  User,
  Movie,
  Save,
//  Service,
//  Stream,
};

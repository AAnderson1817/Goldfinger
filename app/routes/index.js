const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  //Other route groups (userRoutes, adminRoutes, etc) go here in the future
}

/**
 * route bindings
 *
 * @package Route
 * @author asma
 * @copyright 2015 asma All Rights Reserved.
 */

module.exports = function (app, routes) {
  app.use('/', routes.demo);
};

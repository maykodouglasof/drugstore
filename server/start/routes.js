'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post("/users", "UserController.create");
Route.post("/sessions", "SessionController.create");

Route.get("products", "ProductController.index");

Route.post("products", "ProductController.store").middleware("auth");

Route.post("products/:id/images", "ImageController.store").middleware("auth");

Route.get('images/:path', 'ImageController.show')
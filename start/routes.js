const Route = use('Route')

Route.get('/navers', 'NaverController.index')
Route.post('/navers', 'NaverController.store')
Route.get('/navers/:id', 'NaverController.show')

Route.get('/projects', 'ProjectController.index')
Route.post('/projects', 'ProjectController.store')
Route.get('/projects/:id', 'ProjectController.show')
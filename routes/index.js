module.exports = app => {
	// Base URLS
	app.use('/', require('./base.routes.js'))
	app.use('/', require('./auth.routes.js'))
	app.use('/students', require('./student.routes.js'))
}

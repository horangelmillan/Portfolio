const { app } = require('./app');

// Models
/* const { initModels } = require('./models/initModels'); */

// Utils
/* const { db } = require('./utils/database.util');

db.authenticate()
	.then(() => console.log('database authenticated'))
	.catch(err => console.log(err)); */

/* initModels(); */

/* db.sync()
	.then(() => console.log('database synced'))
	.catch(err => console.log(err)); */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log('Server listening on port: ', PORT);
});
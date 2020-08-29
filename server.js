const mongoose = require('mongoose')
const app = require('./app')

const DB = process.env.MONGODB_URL

PORT = process.env.PORT

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then((con) => {
		console.log('MongoDB Connected Successfully');
	});


app.listen(PORT, ()=> {
	console.log('Server is up on port ' + PORT)
})



PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}....`)
})
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var router = express.Router();


var auth = require('./controllers/auth.js')();
var mongoose = require ('mongoose');
mongoose.connect('mongodb://Nicki:n800829@ds051990.mlab.com:51990/apiproject')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/',function(req,res){
	res.json({message:"welcome Back"});
	console.log("working");
});

var courseController = require('./controllers/course.js')
var userController = require('./controllers/user.js')

router.route('/courses')
.post(courseController.postCourse)
.get(courseController.getCourse)

router.route('/courses/:id')
.get(courseController.getCourseById)

router.route('/login')
.post(userController.getUserToken)

app.use('/',router);
app.listen (process.env.PORT || 8080);


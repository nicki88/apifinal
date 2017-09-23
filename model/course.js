var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema ({
	startTime:String,
	endTime:String,
	day:String,
	room:String
})

var CourseScheme = new Schema({
	title: String,
	pic: String, 
	description: String, 
	code:String,
	join:Number,
	review:Number,
	timetable: [ScheduleSchema],
	createdAt:{type:Date, default:Date.now}
});

module.exports= mongoose.model ('Course',CourseScheme);
var Course = require ('../model/course.js')

exports.getCourse = function(req,res){
	Course.find(function(err,courses){
		if (err){
			res.send(err);
		}else {
			res.json(courses);
		}

		});
	}

exports.getCourseById= function(req,res){
	Course.findById(req.params.id,function(err,courses){
		if (err){			
		res.send(err);
		} else {
			res.json(courses);
		}
		});
	
}


exports.postCourse=function(req,res){
	var course = new Course ();
	course.title=req.body.title;
	course.pic= req.body.pic;
	course.description=req.body.description;
	course.code=req.body.code;
	course.join=req.body.join;
course.review=req.body.review;
course.timetable=[];
course.save(function(err){
	if(err){
		res.send(err);
	}
	else{
		res.json({message:"Course created!"});
	}

});

}
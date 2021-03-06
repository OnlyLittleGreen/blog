var multer = require('multer');

var storage = multer.diskStorage({
	destination:function(req,file,callback){
		callback(null,'./public/uploads');
	},

	filename:function(req,file,callback){
		var fileFormat = (file.originalname).split(".");
		callback(null,file.filename + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});

var upload = multer({
	storage:storage
});

module.exports = upload;
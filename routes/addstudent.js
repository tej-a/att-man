var express = require("express");
var router = express.Router();
var add_student = require('../controllers/addstudent');


router.get('/',add_student.add_student_get);
router.post('/',add_student.add_student_post);

module.exports= router;

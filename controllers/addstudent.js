var mysql = require("mysql");
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sandhya123',
    database:'attendence'
  });
  
  connection.connect(function(err){
    if(err){
      throw err.message;
    }
    console.log('connected to the mysql server');
  });



exports.add_student_get = function(req, res) {
    res.render('addstudent');
};

exports.add_student_post = function(req, res) {
    //res.send('NOT IMPLEMENTED: add student post'+req.body.name);
    var sql=`INSERT INTO student VALUES('${req.body.id}','${req.body.name}','${req.body.section}',${req.body.dept_id},${req.body.semester})`;
    console.log(sql);
    connection.query(sql,function (err,res){
        //if(err) throw err;
        res.send('record inserted');
    });
    res.send('record inserted succsessfully');

};


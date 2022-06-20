var DataTypes = require("sequelize").DataTypes;
var _attendance = require("./attendance");
var _department = require("./department");
var _session = require("./session");
var _student = require("./student");
var _subject = require("./subject");

function initModels(sequelize) {
  var attendance = _attendance(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var session = _session(sequelize, DataTypes);
  var student = _student(sequelize, DataTypes);
  var subject = _subject(sequelize, DataTypes);

  session.belongsToMany(student, { as: 'student_id_students', through: attendance, foreignKey: "session_id", otherKey: "student_id" });
  student.belongsToMany(session, { as: 'session_id_sessions', through: attendance, foreignKey: "student_id", otherKey: "session_id" });
  student.belongsTo(department, { as: "dept", foreignKey: "dept_id"});
  department.hasMany(student, { as: "students", foreignKey: "dept_id"});
  attendance.belongsTo(session, { as: "session", foreignKey: "session_id"});
  session.hasMany(attendance, { as: "attendances", foreignKey: "session_id"});
  attendance.belongsTo(student, { as: "student", foreignKey: "student_id"});
  student.hasMany(attendance, { as: "attendances", foreignKey: "student_id"});
  session.belongsTo(subject, { as: "subject", foreignKey: "subject_id"});
  subject.hasMany(session, { as: "sessions", foreignKey: "subject_id"});
  department.belongsTo(teacher, { as: "HOD_teacher", foreignKey: "HOD"});
  teacher.hasMany(department, { as: "departments", foreignKey: "HOD"});
  session.belongsTo(teacher, { as: "teacher", foreignKey: "teacher_id"});
  teacher.hasMany(session, { as: "sessions", foreignKey: "teacher_id"});

  return {
    attendance,
    department,
    session,
    student,
    subject,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student', {
    student_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dept_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'department',
        key: 'dept_id'
      }
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'student',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "student_id" },
        ]
      },
      {
        name: "dept_id",
        using: "BTREE",
        fields: [
          { name: "dept_id" },
        ]
      },
    ]
  });
};

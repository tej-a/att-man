const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    dept_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    HOD: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'teacher',
        key: 'teacher_id'
      }
    }
  }, {
    sequelize,
    tableName: 'department',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dept_id" },
        ]
      },
      {
        name: "HOD",
        using: "BTREE",
        fields: [
          { name: "HOD" },
        ]
      },
    ]
  });
};

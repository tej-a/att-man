const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('session', {
    session_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    subject_id: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'subject',
        key: 'subject_id'
      }
    },
    start_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    teacher_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'teacher',
        key: 'teacher_id'
      }
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'session',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
      {
        name: "subject_id",
        using: "BTREE",
        fields: [
          { name: "subject_id" },
        ]
      },
      {
        name: "teacher_id",
        using: "BTREE",
        fields: [
          { name: "teacher_id" },
        ]
      },
    ]
  });
};

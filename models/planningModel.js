const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');


const Planning = sequelize.define('Planning', {
    plan_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'plannings',
    timestamps: false,
  });



module.exports = Planning;

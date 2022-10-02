import { Sequelize } from "sequelize";

const db = new Sequelize('bcr_db','root','',{
    host : "localhost",
    dialect: "mysql",
    define: {
        created: false,
        // I want updatedAt to actually be called updateTimestamp
        updated: false,
        underscored: true,
        freezeTableName: true, //use singular table name
        timestamps: false,  // I do not want timestamp fields by default
      },
      dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) { // for reading from database
          if (field.type === 'DATETIME') {
            return field.string()
          }
            return next()
          },
      },
      timezone: '+07:00'
});

export default db;
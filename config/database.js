import { Sequelize } from "sequelize";

const db = new Sequelize('bcr_db','postgres','admin',{
    host : "127.0.0.1",
    port : "6600",
    dialect: "postgres",
    
    define: {
        created: false,
        // I want updatedAt to actually be called updateTimestamp
        updated: false,
        underscored: false,
        freezeTableName: true, //use singular table name
        timestamps : true
      },
      timezone: '+07:00', // for writing to database
});

export default db;
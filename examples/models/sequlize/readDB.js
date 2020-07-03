import Sequelize from 'sequelize';

// sqlite3 connection code

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'auth_databases/user.db'
});

console.log(sequelize)
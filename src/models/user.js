import { Sequelize, DataTypes } from 'sequelize';

export default new Sequelize({
      dialect: 'sqlite',
      storage: './auth.db',
      logging: false
    }).define('users', {
      // Model attributes are defined here
      userid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password_salt: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      freezeTableName: true,
      tableName: "users"
});

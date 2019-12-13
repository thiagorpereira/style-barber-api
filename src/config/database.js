require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // Garante que na tabela havera: created_at e updated_at
    underscored: true, // padrao user_groups e ñ UserGroups nas tabelas
    underscoredAll: true, // Nos relacionamentos, etc.
  },
};

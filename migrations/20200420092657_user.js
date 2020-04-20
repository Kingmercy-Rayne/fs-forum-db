exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.text("display_name").notNullable();
    table.text("email").notNullable();
    table.text("google_id").notNullable();
    table.boolean("banned").notNullable().default("false");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

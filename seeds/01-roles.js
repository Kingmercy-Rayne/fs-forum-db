exports.seed = async function (knex) {
  // Use truncate rather than del; this resets the primary key
  await knex("role").del();
  // ALTER SEQUENCE X_id_seq restart with Y...
  // where x is table name and Y is Cascade
  await knex.raw("ALTER SEQUENCE role_id_seq restart with 3");
  return knex("role").insert([
    { id: 1, name: "user" },
    { id: 2, name: "moderator" },
    { id: 3, name: "administrator" },
  ]);
};

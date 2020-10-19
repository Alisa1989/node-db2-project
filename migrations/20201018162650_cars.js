
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.text("VIN").notNull().primary()
      table.text("Model").notNull()
      table.text("Make").notNull()
      table.integer("Mileage").notNull()
      table.text("Transmission Type").default('automatic')
      table.text("Title").default('clean')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};

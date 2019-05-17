exports.up = function(knex) {
  return knex.schema
 .createTable("source",tbl=>{
      tbl.increments() //primary key

      tbl.string("name",50) //description column
          .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('source')
};
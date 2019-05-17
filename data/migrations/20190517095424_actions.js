exports.up = function(knex) {
  return knex.schema
 .createTable("action",tbl=>{
      tbl.increments() //primary key

      tbl.string("name",50) //description column
          .notNullable()

      // tbl.string("notes",50) //notes column

      // tbl.boolean("flag").defaultTo(false) //flag column

      
      //     tbl.integer('project_id')
      //     .unsigned()
      //     .notNullable()
      //     .references('id')
      //     .inTable('project')
      //     .onDelete('RESTRICT')
      //     .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
      .dropTableIfExists('action')
};
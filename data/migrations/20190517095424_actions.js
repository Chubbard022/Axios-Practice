exports.up = function(knex) {
  return knex.schema
.createTable("category",tbl=>{
  tbl
    .increments() //primary key
  tbl
    .string("category",50) //description column
    .notNullable()
})
.createTable("source_category",tbl=>{
  tbl
    .increments()// primary key
  tbl
    .integer("source_id")//FK to source table id
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('source')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
  tbl.integer("category_id")//FK to category id
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('category')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
})
.createTable("source",tbl=>{
    tbl.increments() //primary key

    tbl.string("name",50) //description column
        .notNullable()

    tbl
      .integer("recipe_id")//FK pointing to recipe ID
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
})
.createTable("recipe",tbl=>{
  tbl
    .increments() //primary key
  tbl
    .string("title",50) //description column
    .notNullable()
  tbl
    .string("instructions")
})
.createTable("recipe_ingredients",tbl=>{
  tbl
    .increments()//primary key
  tbl
    .integer("recipe_id")
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipe')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
  tbl
    .integer("ingredient_id")
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredient')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
})
.createTable("ingredient",tbl=>{
  tbl
    .increments() //primary key
  tbl
    .string("ingredient",100) //ingredient column
})
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('ingredient')
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('recipe')
      .dropTableIfExists('source')
      .dropTableIfExists('source_category')
      .dropTableIfExists('category')
};
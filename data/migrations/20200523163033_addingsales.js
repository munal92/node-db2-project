
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.text('postdate',128).notNullable().index();
        tbl.integer('price').notNullable();
        tbl.boolean('inventory').notNullable();
        tbl.timestamps(true,true);
        
        ///

        tbl
        .integer('carsales_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cars')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};

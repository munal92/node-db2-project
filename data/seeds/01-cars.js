
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin:'6FTF48213G2834923',make:'Toyota', model:'Prius' , mileage:'29872'},
        {vin:'092L7455F2346O34',make:'WV', model:'Jetta' , mileage:'6'},
        {vin:'83A2354K231466233',make:'Tesla', model:'Model 3' , mileage:'1203'},
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {postdate:"20 May 2020", price: 20200,inventory:false,carsales_id:1},
        {postdate:"12 April 2020", price: 80700,inventory:true,carsales_id:2},
        {postdate:"2 May 2020", price: 19100,inventory:false,carsales_id:1},
        {postdate:"12 May 2020", price: 18000,inventory:true,carsales_id:1},
        {postdate:"16 May 2020", price: 21200,inventory:true,carsales_id:2},
        {postdate:"19 May 2020", price: 1919,inventory:true,carsales_id:3},
      
      ]);
    });
};

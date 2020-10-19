
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate()

  // Inserts seed entries
  await knex("cars").insert([
    {VIN: "1Q2W3E456", Make: "Ferrari", Model: "LaFerrari", Mileage:"5000"},
    {VIN: "4323TGHJ6", Make: "Porsche", Model: "911 GT3", Mileage:"35000", 'Transmission Type': "Manual"},
    {VIN: "3Q278N456", Make: "Lancia", Model: "Delta Integrale", Mileage:"87000", 'Transmission Type': "Manual", Title: "Salvaged"},
    {VIN: "XZ433E761", Make: "Lamborghini", Model: "Miura", Mileage:"63000", 'Transmission Type': "Manual"},
    
  ]);
};

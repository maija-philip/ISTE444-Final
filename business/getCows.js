const pool = require('../db');

async function getCows() {
  try {
    const [rows] = await pool.execute('SELECT * FROM Cow');

    const cows = rows.map(cow => ({
      id: cow.id,
      name: cow.name,
      age: cow.age,
      evil: cow.evil === 1, // convert 1 to true, 0 to false
      weight: cow.weight,
      description: cow.description,
    }));

    return {
      cows: cows,
    };
  } catch (error) {
    console.error(error);
    return { error: 'Error retrieving cows from the database' };
  }
}

module.exports = {
  getCows,
};

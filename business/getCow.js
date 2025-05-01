const pool = require('../db');

async function getCow(id) {
  try {
    const [rows] = await pool.execute('SELECT * FROM Cow WHERE id = ?', [id]);

    if (rows.length === 0) {
      return { error: `Cow with id: ${id} not found` };
    }

    const cow = {
      id: rows[0].id,
      name: rows[0].name,
      age: rows[0].age,
      evil: rows[0].evil === 1, // convert 1 to true, 0 to false
      weight: rows[0].weight,
      description: rows[0].description,
    };

    return {
      cow: cow,
    };
  } catch (error) {
    console.error(error);
    return { error: 'Error retrieving cow from the database' };
  }
}

module.exports = {
  getCow,
};

const db = require("../db");

async function createCow(data) {
  try {
    const { name, age, evil, weight, description } = data;

    const [result] = await db.execute(
      `INSERT INTO Cow (name, age, evil, weight, description)
       VALUES (?, ?, ?, ?, ?)`,
      [name, age, evil ? 1 : 0, weight, description]
    );

    return {
      message: "success, cow created",
      cow: {
        id: result.insertId,
        name,
        age,
        evil: !!evil, // make sure it's a boolean
        weight,
        description,
      },
    };
  } catch (err) {
    console.error("Error inserting cow:", err);
    return { error: `Server Error, could not add cow, sorry` };
  }
}

module.exports = {
    createCow,
};

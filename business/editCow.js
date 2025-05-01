const db = require("../db");

async function editCow(data) {
  const { id, name, age, evil, weight, description } = data;

  try {
    const [existing] = await db.execute("SELECT * FROM Cow WHERE id = ?", [id]);
    if (existing.length === 0) {
      return { error: `Cow with id: ${id} could not be found` };
    }

    const fields = [];
    const values = [];

    if (name !== undefined) {
      fields.push("name = ?");
      values.push(name);
    }
    if (age !== undefined) {
      fields.push("age = ?");
      values.push(age);
    }
    if (evil !== undefined) {
      fields.push("evil = ?");
      values.push(evil ? 1 : 0);
    }
    if (weight !== undefined) {
      fields.push("weight = ?");
      values.push(weight);
    }
    if (description !== undefined) {
      fields.push("description = ?");
      values.push(description);
    }

    if (fields.length === 0) {
      return { error: "No valid fields provided for update" };
    }

    const updateQuery = `UPDATE Cow SET ${fields.join(", ")} WHERE id = ?`;
    values.push(id);

    await db.execute(updateQuery, values);

    const [updatedRows] = await db.execute("SELECT * FROM Cow WHERE id = ?", [id]);
    const cow = updatedRows[0];

    return {
      message: "success, cow updated",
      cow: {
        id: cow.id,
        name: cow.name,
        age: cow.age,
        evil: !!cow.evil,
        weight: cow.weight,
        description: cow.description,
      },
    };
  } catch (err) {
    console.error("Error updating cow:", err);
    return { error: `Server error, could not update cow` };
  }
}

  module.exports = {
      editCow,
  };
  
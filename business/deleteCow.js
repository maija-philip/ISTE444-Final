const db = require("../db"); 

async function deleteCow(id) {
  try {
    const [existing] = await db.execute("SELECT * FROM Cow WHERE id = ?", [id]);
    if (existing.length === 0) {
      return { error: `Cow with id: ${id} not found` };
    }

    await db.execute("DELETE FROM Cow WHERE id = ?", [id]);

    return {
      message: `Success, cow with id: ${id} was deleted`,
    };
  } catch (err) {
    console.error("Error deleting cow:", err);
    return { error: "Server error, could not delete cow" };
  }
}

  module.exports = {
    deleteCow,
  };
  
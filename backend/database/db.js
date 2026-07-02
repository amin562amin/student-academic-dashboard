const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./students.db", (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    course TEXT NOT NULL,
    qualification TEXT NOT NULL,
    averageGrade INTEGER NOT NULL,
    attendance INTEGER NOT NULL
  )
`);

module.exports = db;
const { MongoClient } = require("mongodb");

async function run() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("studentDB");
  const assignments = db.collection("assignments");

  // Унікальний індекс на name
  await assignments.createIndex({ name: 1 }, { unique: true });

  // Студенти, чиє ім’я починається на "A"
  console.log("=== Студенти на 'A' ===");
  console.log(await assignments.find({ name: /^А/ }).toArray());

  // Аналіз explain
  console.log("=== explain() ===");
  console.log(await assignments.find({ name: /^A/ }).explain("executionStats"));

  await client.close();
}

run().catch(console.dir);

const { MongoClient } = require("mongodb");

async function run() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("studentDB");
  const assignments = db.collection("assignments");

  console.log("=== Середній бал за предметом ===");
  console.log(await assignments.aggregate([
    { $group: { _id: "$subject", avgScore: { $avg: "$score" } } }
  ]).toArray());

  console.log("=== Предмети, де середній бал > 75 ===");
  console.log(await assignments.aggregate([
    { $group: { _id: "$subject", avgScore: { $avg: "$score" } } },
    { $match: { avgScore: { $gt: 75 } } }
  ]).toArray());

  await client.close();
}

run().catch(console.dir);

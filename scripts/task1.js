const { MongoClient } = require("mongodb");

async function run() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("studentDB");
  const assignments = db.collection("assignments");

  // Очищення перед вставкою
  await assignments.deleteMany({});

  // Додавання документів
  await assignments.insertMany([
    { name: "Іван", subject: "Math", score: 78 },
    { name: "Марія", subject: "History", score: 92 },
    { name: "Олег", subject: "Biology", score: 85 },
    { name: "Анна", subject: "Math", score: 88 },
    { name: "Петро", subject: "Physics", score: 70 }
  ]);

  // Знайти всі документи, де score > 80
  console.log("=== Студенти з балом > 80 ===");
  console.log(await assignments.find({ score: { $gt: 80 } }).toArray());

  // Оновити одного студента з балом < 85 (+5 балів)
  await assignments.updateOne(
    { score: { $lt: 85 } },
    { $inc: { score: 5 } }
  );

  // Видалити студента з найнижчим балом
  const lowest = await assignments.find().sort({ score: 1 }).limit(1).toArray();
  await assignments.deleteOne({ _id: lowest[0]._id });

  // Вивести тільки ім’я та бали
  console.log("=== Ім’я та бали студентів ===");
  console.log(await assignments.find({}, { projection: { name: 1, score: 1, _id: 0 } }).toArray());

  await client.close();
}

run().catch(console.dir);

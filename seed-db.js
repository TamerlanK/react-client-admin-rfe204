import fs from "fs";
import fetch from "node-fetch";

const URL = "https://fakestoreapi.com/products";
const DB_PATH = "./src/data/db.json";

async function seedDatabase() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    const dbContent = {
      products: data,
    };

    fs.writeFileSync(DB_PATH, JSON.stringify(dbContent, null, 2));
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();

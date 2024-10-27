// reach db and get meals data

import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  // add arbitary deelay to simulate slow db
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
}

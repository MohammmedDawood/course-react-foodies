// reach db and get meals data

import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  // add arbitary deelay to simulate slow db
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Failed to fetch meals");
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
}

export function getMealBySlug(slug) {
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return meal;
}

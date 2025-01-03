import fs from "node:fs";
// reach db and get meals data
import sql from "better-sqlite3";

import slugify from "slugify";
import xss from "xss";

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

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // file upload
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to save image");
    }
  });

  meal.image = `/images/${filename}`;

  db.prepare(
    "INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)"
  ).run(meal);
}

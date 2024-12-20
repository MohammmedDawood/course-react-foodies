import Image from "next/image";
import { getMealBySlug } from "@/lib/meals";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

async function MealDetailsPage({ params }) {
  const meal = getMealBySlug(params.mealSlug);

  if (!meal) {
    return notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br>"),
          }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;

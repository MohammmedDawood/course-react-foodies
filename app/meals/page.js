import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getAllMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "@/app/meals/loading-meals";

async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}

async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecious meals, created{" "}
          <span className={classes.higlight}>by you</span>
        </h1>
        <p>
          Choose your favorite meal and enjoy a delicious lunch or dinner at
          home
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;

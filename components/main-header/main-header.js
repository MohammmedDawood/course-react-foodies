"use client";
import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

function MainHeader() {
  const path = usePathname();
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image
          src={logoImg.src}
          alt='A plate with food on it'
          width={100}
          height={100}
          priority
        />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href='/meals'
              className={path.startsWith("/meals") ? classes.active : undefined}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href='/community'
              className={
                path.startsWith("/community") ? classes.active : undefined
              }
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

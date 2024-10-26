import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

function MainHeader() {
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
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

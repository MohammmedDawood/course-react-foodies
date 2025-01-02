import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

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
            <NavLink href='/meals'> Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'> Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

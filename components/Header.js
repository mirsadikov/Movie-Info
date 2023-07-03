import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const navRef = useRef(null);

  function fixedNav() {
    navRef.current.classList.toggle("fixed", window.scrollY > 50);
  }

  useEffect(() => {
    window.addEventListener("scroll", fixedNav);

    return () => {
      window.removeEventListener("scroll", fixedNav);
    };
  }, []);

  return (
    <header ref={navRef}>
      <a className="brand" href="/">
        <h1>MovieInfo</h1>
      </a>
      <nav>
        <ul>
          <li className="about">
            <Link href="/about">About</Link>
          </li>
          <li className="signIn">
            <Link href="/signin">
              <a className="signIn">Sign in</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

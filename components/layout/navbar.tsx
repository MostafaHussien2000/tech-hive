import Link from "next/link";
import { SectionContainer } from "./section-container";
import { NavLink } from "../shared/navlink/navlink";
import { Button } from "../shared/button/button";
import { ToggleTheme } from "./toggle-theme";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full p-4">
      <SectionContainer className="flex justify-between items-center border border-muted p-4 rounded-3xl backdrop-blur-lg">
        <Link href="/">
          <h3 className="text-2xl font-bold">Tech Hive</h3>
        </Link>
        <nav className="flex items-center justify-between">
          <ul className="flex gap-4">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <Button variant="default">Sign Up</Button>
          <ToggleTheme
            type="button"
            animationType="swipe-down"
            className="cursor-pointer"
          />
        </div>
      </SectionContainer>
    </header>
  );
}

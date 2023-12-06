import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const session = 0;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href={"/"}>
          <Image src="logo.svg" alt="Flexibble" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCemter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href={"/create-project"}>Share Work</Link>
          </>
        ) : (
          <>
            <button className="btn btn-ghost btn-small">Sign In</button>
            <button className="btn btn-primary btn-small">Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

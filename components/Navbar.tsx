"use client";
import React, { useEffect } from "react";
import { NavLinks } from "@/constants";
import state from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useSnapshot } from "valtio";
import ButtonMotion from "./framerMotion/ButtonMotion";
import { checkUser } from "@/app/api/appwrite/api";
const Navbar = () => {
  const snap = useSnapshot(state);
  useEffect(() => {
    return () => {
      checkUser();
    };
  }, []);
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
      <div className="flexCenter gap-4">
        {snap.logged ? (
          <>
            <Link href={"/profile/user"}>
              <Image
                src={
                  snap.user.image
                    ? state.user.image
                    : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt="user"
                width={40}
                height={40}
              />
            </Link>

            <Link href={"/create-project"}>Share Work</Link>
            <ButtonMotion type="button" className="text-sm">
              Sign Out
            </ButtonMotion>
          </>
        ) : (
          <>
            <Link href="login">
              <ButtonMotion className="btn btn-ghost btn-small">
                Sign In
              </ButtonMotion>
            </Link>
            <Link href="create-account">
              <ButtonMotion className="btn btn-primary btn-small bg">
                Sign Up
              </ButtonMotion>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

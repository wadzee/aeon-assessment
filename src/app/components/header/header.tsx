"use client";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import navbarLinks from "@/constant/navbar_links.json";

export function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="p-5 border-b sticky top-0 w-full bg-slate-900 z-50">
        <section className="container mx-auto flex justify-between items-center gap-6 relative">
          <nav className="flex-grow">
            <ul className="flex gap-8">
              {navbarLinks.map(({ label, link }, idx) => (
                <li className="hidden first:block sm:block" key={idx}>
                  <Link href={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="sm:hidden"
            onClick={() => setShowSearchInput(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
            >
              <path
                fill="white"
                d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
              ></path>
            </svg>
          </button>
          {
            <button className="sm:hidden" onClick={() => setShowMenu(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path
                  fill="white"
                  d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
                ></path>
              </svg>
            </button>
          }
          <form
            className={classNames(
              "sm:block",
              showSearchInput && "block absolute w-full z-10",
              !showSearchInput && "hidden"
            )}
          >
            <input
              type="search"
              placeholder="Search documentation..."
              className="w-[90%] rounded-md"
            />
            <button
              type="button"
              className="absolute top-1 -right-1 z-50 w-8 bg-white rounded-full p-1 sm:hidden"
              onClick={() => setShowSearchInput(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 30 30"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            </button>
          </form>
        </section>
      </header>
      <aside
        className={classNames(
          "sm:hidden w-full",
          showMenu && "block",
          !showMenu && "hidden"
        )}
      >
        <button
          type="button"
          className="absolute top-4 right-4 z-50 w-8 bg-white rounded-full p-1 sm:hidden"
          onClick={() => setShowMenu(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
          </svg>
        </button>
        <ul className="flex flex-col gap-8 p-5 w-full fixed top-0 bg-[#f5f5f7] text-[black]">
          {navbarLinks.map(({ label, link }, idx) => {
            return (
              <li key={idx}>
                <Link href={link}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

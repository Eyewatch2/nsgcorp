"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { montserrat } from "@/lib/fonts";

const navItems = [
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Soluciones", href: "/#soluciones" },
  { name: "Empresas", href: "/#empresas" },
  { name: "Equipo", href: "/equipo" },
  { name: "Contacto", href: "/#contacto", highligted: true},
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${montserrat.className} w-full mx-auto fixed md:sticky top-0 right-0 left-0 bg-[url("/img/banner.webp")]  py-5 z-50`}
    >
      <div className="container 2xl:max-w-screen-xl px-5 mx-auto flex justify-between items-center">
        <Link href="/" className="max-w-32 md:max-w-max">
          <Image
            className="relative w-full z-50"
            alt="Logo Ns Group"
            src={menuOpen ? "/img/logo_negro.webp" : "/img/logo_blanco.webp"}
            width={185}
            height={38}
          />
        </Link>
        <nav className="hidden md:flex gap-5 md:gap-2 lg:gap-5 uppercase text-sm text-white">
          {navItems.map((item) => (
            <Link
              scroll
              key={item.name}
              href={item.href}
              className={`${item.highligted && "bg-black !px-5 hover:bg-[#161616] before:absolute before:bg-white before:z-10 before:w-2/3 before:h-px before:bottom-1/4 before:left-1/2 before:-translate-x-1/2 hover:before:scale-x-125 before:transition"} relative hover:after:translate-y-0 p-5 md:px-1 lg:px-5 overflow-hidden after:absolute after:w-full after:h-full after:inset-0 after:-translate-y-full after:transition after:duration-300 after:-z-10 after:bg-primary hover:text-white transition duration-300 after:hidden after:lg:block`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 transition ${
              menuOpen ? "bg-black opacity-0" : "bg-white"
            }`}
          ></span>
          <span className="relative h-0.5">
            <span
              className={`block absolute inset-0 w-6 h-0.5 transition ${
                menuOpen ? "bg-black rotate-45" : "bg-white"
              }`}
            ></span>
            <span
              className={`block absolute inset-0 w-6 h-0.5 transition ${
                menuOpen ? "bg-black -rotate-45" : "bg-white"
              }`}
            ></span>
          </span>
          <span
            className={`block w-6 h-0.5 transition ${
              menuOpen ? "bg-black opacity-0" : "bg-white"
            }`}
          ></span>
        </button>
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${item.highligted && "w-1/2 bg-black text-white"} text-center text-2xl uppercase p-5`}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

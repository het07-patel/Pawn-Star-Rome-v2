"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderLinkButton, LinkButton } from "./button";
import logo from "@/assets/images/white-logo.webp";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuList = [
    { href: "/", label: "Home" },
    { href: "/what-we-buy", label: "What We Buy" },
    { href: "/about", label: "About" },
    { href: "/pawn-process", label: "Pawn Process" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const contactBtn = useCallback((params) => {
    const className = params?.className;
    return (
      <LinkButton
        href="/contact"
        className={`lg:flex !py-0 !px-0 w-36 lg:!h-[2.2rem] 4xl:!h-[3rem] before:bg-white animated-btn relative border border-white hover:border-primary  !bg-primary text-approxblack font-semibold text-[15px] rounded-lg overflow-hidden group ${className}`}
        onClick={params.onClick}
      >
        <span className="relative z-10 transition-colors duration-400 group-hover:text-approxblack md:px-16 md:py-4 px-8 py-3 ">
          Contact
        </span>
      </LinkButton>
    );
  }, []);

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-transform duration-300 bg-approxblack shadow-xl ${
        isHeaderVisible
          ? "translate-y-0"
          : "-translate-y-[120px] xl:-translate-y-[140px]"
      }`}
    >
      <div className="!px-5 container">
        <div className="mx-auto flex gap-2 xxs:gap-3 xs:gap-4 items-center justify-between 2xl:px-14  2xl:py-4">
          <Link href="/">
            <Image
              src={logo}
              alt="Pawn Star Rome | Gold, Silver, Diamond"
              title="Pawn Star Rome | Gold, Silver, Diamond"
              className="object-contain w-20 h-20 lg:w-24 lg:h-24 2xl:h-auto"
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="gap-0 2xl:gap-0 font-sans flex items-center">
              {menuList.map((item) => (
                <HeaderLinkButton
                  key={item?.label}
                  href={item?.href}
                  className={"rounded-none"}
                >
                  {item?.label}
                </HeaderLinkButton>
              ))}
            </ul>
          </nav>

          {contactBtn({ className: "hidden" })}
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 xxs:p-2 hover:bg-white/10 rounded-full text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <RxCross2 className="w-5 h-5 xxs:w-6 xxs:h-6" />
            ) : (
              <IoMenu className="w-5 h-5 xxs:w-6 xxs:h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden "
            >
              <nav className="text-center font-sans h-screen px-2 xxs:px-3 xs:px-4  py-2 flex flex-col gap-3">
                {menuList.map((item) =>
                  item.dropDown ? (
                    <DropDown
                      key={item.label}
                      title={item.label}
                      menuList={item.dropDown}
                      onToggle={() => setIsMenuOpen(false)}
                    />
                  ) : (
                    <HeaderLinkButton
                      key={item?.label}
                      href={item?.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full justify-center rounded-lg"
                    >
                      {item?.label}
                    </HeaderLinkButton>
                  )
                )}
                <div className="justify-center flex">
                  {contactBtn({ onClick: () => setIsMenuOpen(false) })}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

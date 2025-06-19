"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const containedBtn = "bg-white";
const outlinedBtn = " text-white";
const primaryBtn = `
  rounded-lg
  text-[15px] 
  2xl:text-lg
  h-8
  xxs:h-9
  xs:h-10
  lg:h-[2.7rem]
  px-3
  xxs:px-4
  lg:px-5
  lg:py-5
  min-w-[80px]
  xxs:min-w-[90px]
  xs:min-w-[100px]
  lg:min-w-[144px]
  4xl:min-w-[160px]
  text-approxblack
  flex
  items-center
  justify-center
  font-semibold

  duration-400
  transition-all
  ease-linear
  whitespace-nowrap
`;

/**
 *
 * @param {*} href, className, rest props
 * @returns Link for header with active class
 */
export const HeaderLinkButton = ({ href = "", className = "", ...rest }) => {
  const pathname = usePathname();
  const isActive =
    pathname === href
      ? "text-primary text-sm 2xl:text-lg"
      : "text-gray  hover:text-primary !font-normal text-sm 2xl:text-lg";

  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={`relative transition-all duration-300 lg:!h-[2.1rem] 2xl:!h-12 4xl:!h-[3.2rem] lg:!py-1 2xl:!py-2 4xl:!py-3 lg:!px-6 2xl:!px-9 4xl:!px-10  ${isActive} ${className}`}
      {...rest}
    >
      {pathname === href && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 rounded-lg lg:rounded-none"
          transition={{
            type: "spring",
            duration: 0.5,
            bounce: 0.2,
          }}
        />
      )}
      <span className="relative z-10">{rest.children}</span>
    </Link>
  );
};

/**
 *
 * @param {*} href, className, rest props
 * @returns LinkButton (Button style)
 */
export const LinkButton = ({ href = "", className = "", ...rest }) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={`${containedBtn} ${primaryBtn} ${className}`}
      {...rest}
    />
  );
};

/**
 *
 * @param {*} href, className, rest props
 * @returns Button with border/bg
 * @description contained/outlined button
 */

export const Button = ({
  className = "",
  variant = "contained",

  ...rest
}) => {
  return (
    <button
      className={`${
        variant === "contained" ? containedBtn : outlinedBtn
      } ${primaryBtn} ${className}`}
      {...rest}
    />
  );
};

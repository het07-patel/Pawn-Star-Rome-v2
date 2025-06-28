"use client";

import { useMemo, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { removeTrailingSlash } from "@/helper/helperFunctions";
import { setIsMenuOpen } from "@/store/slices/commonSlice";
import { useClickOutside } from "@/utils/hooks";
import { createPortal } from "react-dom";

const DropDown = ({ title, menuList, isDropDownOpen, setIsDropDownOpen }) => {
  const triggerRef = useRef();
  const desktopMenuRef = useRef();
  const mobileMenuRef = useRef();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();


  const activeItem = useMemo(() => {
    if (!pathname) return null;
    return menuList.find(
      (x) =>
        x.href && removeTrailingSlash(x.href) === removeTrailingSlash(pathname)
    );
  }, [menuList, pathname]);

  const handleDropDownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropDownOpen(!isDropDownOpen);
  };

  useClickOutside([desktopMenuRef, mobileMenuRef], () => {
    setIsDropDownOpen(false);
  }, [triggerRef]);

  const getDropdownPosition = () => {
    if (!triggerRef.current) return { top: 0, left: 0, width: 0 };
    const rect = triggerRef.current.getBoundingClientRect();
    return {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    };
  };

  const position = isDropDownOpen
    ? getDropdownPosition()
    : { top: 0, left: 0, width: 0 };

  const isDropdownActive = activeItem !== null;

  return (
    <>
      {/* === Trigger Button === */}
      <div
        ref={triggerRef}
        className="relative inline-block text-center w-full lg:w-auto"
      >
        <button
          onClick={handleDropDownToggle}
          className={`rounded-none w-full lg:w-auto transition-all duration-300 lg:!h-[2.1rem] 2xl:!h-12 4xl:!h-[3.2rem] lg:!px-6 2xl:!px-9 4xl:!px-10 !font-normal text-sm 2xl:text-lg flex items-center justify-center gap-1.5 ${isDropdownActive ? "text-gray" : "hover:text-primary"
            }`}
          aria-expanded={isDropDownOpen}
          aria-haspopup="true"
          type="button"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            {title}
            {isDropDownOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
          </span>
        </button>

        {/* === Mobile Dropdown === */}
        {isDropDownOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[210px] rounded-lg bg-white p-2 shadow-[rgba(99,99,99,0.2)_0_1px_6px_0] lg:hidden z-[60]"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col w-full gap-[2px]">
              {menuList.map((x, i) => (
                <li key={i} className="w-full">
                  {x.href && (
                    <button
                      type="button"
                      className={`block w-full text-left leading-5 text-[15px] text-black transition-all font-normal bg-lightslate p-[9px] ${activeItem?.href === x.href
                        ? "!text-white rounded-lg bg-black"
                        : "hover:bg-black hover:text-white hover:rounded-lg"
                        }`}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setIsDropDownOpen(false); 
                        dispatch(setIsMenuOpen(false));
                        router.push(x.href); 
                      }}

                    >
                      {x.title}
                    </button>
                  )}
                </li>
              ))}
            </ul>

          </div>
        )}
      </div>

      {isDropDownOpen && typeof window !== "undefined" &&
        createPortal(
          <>

            <div
              onClick={() => setIsDropDownOpen(false)}
              className="fixed inset-0 z-[9998] hidden lg:block"
              aria-hidden="true"
            />

            <div
              style={{
                position: "absolute",
                top: `${position.top}px`,
                left: `${position.left}px`,
                width: `${position.width}px`,
                zIndex: 9999,
              }}
            >
              <div
                ref={desktopMenuRef}
                className="rounded-lg bg-white p-2 shadow-[rgba(99,99,99,0.2)_0_1px_6px_0] hidden lg:block"
                style={{
                  minWidth: "255px",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col w-full gap-[2px]">
                  {menuList.map((x, i) => (
                    <li key={i} className="w-full">
                      {x.href && (
                        <Link
                          href={x.href}
                          className={`block w-full leading-5 text-[15px] 2xl:text-lg text-black transition-all font-normal bg-lightslate p-[9px] 2xl:p-[10px] ${activeItem?.href === x.href
                            ? "!text-white rounded-lg bg-black"
                            : "hover:bg-black hover:text-white hover:rounded-lg"
                            }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsDropDownOpen(false);
                            dispatch(setIsMenuOpen(false));
                          }}
                        >
                          {x.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>,
          document.body
        )}

    </>
  );
};

export default DropDown;

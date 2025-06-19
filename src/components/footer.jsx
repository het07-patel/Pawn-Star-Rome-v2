"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import twitter from "@/assets/images/icons/twitter.svg";
import instagram from "@/assets/images/icons/instagram.svg";
import youtube from "@/assets/images/icons/youtube.svg";
import facebook from "@/assets/images/icons/facebook.svg";
import {
  companyAddress,
  companyPhoneNo,
  locationUrl,
} from "@/utils/environments";
import { FaLocationDot } from "react-icons/fa6";
const serviceLinks = [
  { title: "Home", href: "/" },
  { title: "What We Buy", href: "/what-we-buy" },
  { title: "About", href: "/about" },
  { title: "Pawn Process", href: "/pawn-process" },
];

const socialMediaLinks = [
  { icon: twitter, href: "javascript:;" },
  { icon: facebook, href: "javascript:;" },
  { icon: youtube, href: "javascript:;" },
  { icon: instagram, href: "javascript:;" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060406] text-white">
      <div className="container mx-auto py-14 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 w-[80%]">
          <h4 className="text-xl font-semibold">THANK YOU</h4>
          <p className="text-sm leading-relaxed">
            <span className="text-primary font-semibold">
              For choosing us!{" "}
            </span>{" "}
            - We appreciate your trust and look forward to serving you with
            quick, reliable, and fair pawn services in Rome.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-5 w-full">
          <div>
            <h3 className="text-[17px] font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((item, index) => (
                <li
                  className="hover:text-primary transition-all duration-300"
                  key={index}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[60%]">
            <h3 className="text-[17px] font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`tel:${companyPhoneNo}`} target="_blank">
                  +1 {companyPhoneNo}
                </Link>
              </li>
              <li>
                <p>Mon - Fri &nbsp;&nbsp; 9am - 5pm</p>
                <p>Sat &nbsp;&nbsp; 9am - 3pm</p>
                <p>Sun &nbsp; -&nbsp; closed</p>
              </li>
              <div className="lg:flex items-start space-y-1.5 lg:space-y-0  lg:gap-3">
                <Link
                  href={locationUrl}
                  target="_blank"
                  className="flex w-fit items-center gap-1 hover:text-primary transition-all "
                >
                  <FaLocationDot width={22} />
                  <h5>USA</h5>
                </Link>
                <p className="text-gray">{companyAddress}</p>
              </div>
              {/* <div className="flex gap-2">
                {socialMediaLinks.map((item, index) => (
                  <Link href={item.href} key={`${item.href}-${index}`}>
                    <Image src={item.icon} alt="Social Media" />
                  </Link>
                ))}
              </div> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-baseblack text-center text-[#aaa] text-sm py-4 lg:py-6">
        <p>Copyright - 2025. All rights Reserved</p>
      </div>
    </footer>
  );
}

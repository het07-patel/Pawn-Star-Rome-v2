"use client";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Link from "next/link";
import Image from "next/image";
import * as yup from "yup";
import { Button } from "@/components/button";
import Hero from "@/components/hero";
import letschat from "@/assets/images/contact/letschat.webp";
import line from "@/assets/images/contact/line.webp";
import share from "@/assets/images/icons/share.webp";
import gradient from "@/assets/images/gradient.webp";
import year from "@/assets/images/contact/year.webp";
import logo from "@/assets/images/contact/logo.webp";
import { emailPattern, phoneRegex } from "@/utils/lib";
import pawnProcessHero from "@/assets/images/contact/contactHero.webp";
import { sendContactDetails } from "@/services";
import Spinner from "@/components/Spinner";
import Alert from "@/components/Alert";
import {
  companyAddress,
  companyEmail,
  companyPhoneNo,
  locationUrl,
} from "@/utils/environments";
import { setContactMessage } from "@/store/slices/commonSlice";
import { useAlertTimeout } from "@/utils/hooks";

const inputClassName =
  "peer block w-full py-2 md:py-3 lg:py-4 text-[14px] lg:text-base placeholder:text-gray placeholder:text-opacity-70 bg-transparent border-b border-gray active:border-white focus:border-white focus:outline-none focus:ring-0 rounded-none";

export default function ContactUs() {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const { contactLoading, contactMessage } = useSelector(
    ({ common }) => common
  );

  useAlertTimeout(contactMessage, () =>
    dispatch(setContactMessage({ message: "", type: "" }))
  );
  const onSubmit = useCallback(async (val, { resetForm }) => {
    const res = await dispatch(sendContactDetails(val));
    if (res) resetForm();
  }, []);

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      },
      validationSchema: yup.object({
        name: yup.string().trim().required("Name is required"),
        email: yup
          .string()
          .matches(emailPattern, "Email is not valid")
          .required("Email is required"),
        phoneNumber: yup
          .string()
          .matches(phoneRegex, "Phone number is not valid")
          .required("Phone number is required"),
        message: yup.string().trim().notRequired(),
      }),
      enableReinitialize: true,
      onSubmit,
    });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="">
      <Hero
        imageSrc={pawnProcessHero}
        imageSrcAltAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        imageSrcTitleAttr={"Pawn Star Rome | Gold, Silver, Diamond"}
        title="Contact Us for Fast Pawn Services in Rome"
        description="Have questions or need assistance? Reach out to our pawn shop in Rome for quick, reliable pawn services, fair appraisals, and expert advice. We're here to help with all your pawn needs!"
      />
      <div className="relative z-[2]">
        {/* Hero Section */}
        <section className="relative h-[160px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 3xl:h-[650px] flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={line}
              alt="Pawn Star Rome | Gold, Silver, Diamond"
              title="Pawn Star Rome | Gold, Silver, Diamond"
              className="z-[-1] h-auto w-full object-cover mt-[10%] md:mt-[17%] lg:mt-[10%] 2xl:mt-[7%]"
            />
          </div>
          <Image
            src={letschat}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            className="object-contain z-[1] w-[80%] sm:w-[70%] md:w-[60%] lg:w-auto"
          />
        </section>

        {/* Contact Section */}
        <section className="flex flex-col lg:flex-row justify-between gap-8 mt-10 max-w-screen-4xl mx-auto z-[2] px-4 sm:px-6 lg:px-8">
          {/* Address Card */}
          <div className="w-full lg:w-[55%] 3xl:w-[50%] z-50">
            <div className="border border-gray bg-approxblack px-4 sm:px-6 lg:px-8 py-4 rounded-3xl border-gray-900 h-fit w-full lg:w-full 3xl:w-[80%]">
              <div className="border-b border-gray py-3 min-h-[80px] sm:min-h-[100px]">
                <p className="text-gray text-sm sm:text-base">Shop</p>
                <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                  <p
                    className={`text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight font-gelasio`}
                  >
                    New York
                  </p>
                  <Link
                    href={locationUrl}
                    target="_blank"
                    className="flex justify-center items-center gap-2 text-gray text-sm sm:text-base"
                  >
                    <span>Open Google Map </span>
                    <Image
                      src={share}
                      alt="Pawn Star Rome | Gold, Silver, Diamond"
                      title="Pawn Star Rome | Gold, Silver, Diamond"
                      className="w-4 h-4"
                    />
                  </Link>
                </div>
              </div>
              <div className="border-b border-gray py-3 min-h-[80px] sm:min-h-[100px]">
                <p className="text-gray text-sm sm:text-base">Address</p>
                <p
                  className={`text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-tight font-gelasio`}
                >
                  {companyAddress}, United States
                </p>
              </div>
              <div className="border-b border-gray py-3 min-h-[80px] sm:min-h-[100px]">
                <p className="text-gray text-sm sm:text-base">Phone</p>
                <p
                  className={`text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-tight font-gelasio`}
                >
                  +1 {companyPhoneNo}
                </p>
              </div>
              <div className="py-4 min-h-[80px] sm:min-h-[100px]">
                <p className="text-gray text-sm sm:text-base">Email </p>
                <p
                  className={`text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-gelasio`}
                >
                  {companyEmail}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="z-50 w-full lg:w-[75%]">
            <p
              className={`text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] mb-4 sm:mb-6 font-gelasio`}
            >
              Send us a message
            </p>
            <form
              onSubmit={handleSubmit}
              onKeyDown={handleKeyPress}
              className="flex flex-col gap-3 lg:gap-4"
            >
              <div>
                <input
                  className={inputClassName}
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.name || ""}
                />
                {touched?.name && errors?.name && (
                  <p className="text-left text-sm text-rose-500 mt-1">
                    {errors?.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  className={inputClassName}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.email || ""}
                />
                {touched?.email && errors?.email && (
                  <p className="text-left text-sm text-rose-500 mt-1">
                    {errors?.email}
                  </p>
                )}
              </div>
              <div>
                <input
                  className={inputClassName}
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your Phone Number*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.phoneNumber || ""}
                />
                {touched?.phoneNumber && errors?.phoneNumber && (
                  <p className="text-left text-sm text-rose-500 mt-1">
                    {errors?.phoneNumber}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  rows="4"
                  className={inputClassName}
                  id="message"
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.message || ""}
                />
              </div>
              {contactMessage?.message ? (
                <Alert
                  message={contactMessage?.message}
                  type={contactMessage.type}
                />
              ) : null}
              <Button
                type="submit"
                title="Send Message"
                disabled={contactLoading}
                onMouseOver={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
                className={`w-fit before:bg-primary animated-btn border border-primary hover:border-white inline-block relative my-2 !bg-approxblack lg:mt-6 !py-2 text-approxblack font-semibold  text-sm md:text-lg rounded-lg overflow-hidden group`}
              >
                <span className="relative z-10 transition-colors duration-400 group-hover:text-white">
                  {contactLoading ? (
                    <Spinner color={isHovered ? "white" : ""} />
                  ) : (
                    "Send Message"
                  )}
                </span>
              </Button>
            </form>
          </div>
        </section>

        {/* Background Gradient */}
        <div className="absolute z-[-1] top-0 left-0 w-full h-[150%]">
          <Image
            src={gradient}
            alt="Pawn Star Rome | Gold, Silver, Diamond"
            title="Pawn Star Rome | Gold, Silver, Diamond"
            className="h-full w-full z-[-1] relative object-cover scale-105"
          />
        </div>
      </div>

      {/* Logo Section */}
      <section className="relative z-[2] mt-16 sm:mt-24 lg:mt-32 mb-4 lg:mb-8 h-[300px] sm:h-[350px] md:h-[400px] flex justify-center items-center flex-col px-4 sm:px-6 lg:px-8">
        <Image
          src={logo}
          alt="Pawn Star Rome | Gold, Silver, Diamond"
          title="Pawn Star Rome | Gold, Silver, Diamond"
          className="z-[-1] h-auto w-[80%] sm:w-[70%] md:w-auto"
        />

        <div className="absolute w-full z-[-1] top-0 left-0 h-full flex justify-center items-center text-center px-4 font-gelasio">
          <p className="w-full sm:w-[80%] md:w-[70%] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px]">
            At{" "}
            <span className="border-b-2 border-primary font-medium italic">
              Pawn Star Rome,
            </span>{" "}
            we know every item has a story, and every customer has a unique
            need.
          </p>
        </div>
      </section>

      {/* Year Image */}
      <section className="mb-10">
        <Image
          src={year}
          alt="Pawn Star Rome | Gold, Silver, Diamond"
          title="Pawn Star Rome | Gold, Silver, Diamond"
          className="z-[-1] h-auto w-full"
        />
      </section>
    </div>
  );
}

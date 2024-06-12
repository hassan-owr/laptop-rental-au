import Image from "next/image";
import React from "react";
import banner_bg from "../public/contactus_bg.png";
import Link from "next/link";
import { getStrapiURL } from "@/lib/utils";
import CtaButton from "./CtaButton";

export interface BannerImageProps {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface BannerProps {
  btn?: string;
  link?: string;
  title: string;
  text?: string;
  image?: BannerImageProps;
}

const Banner = ({ btn, title, text, link, image }: BannerProps) => {
  return (
    <section className="relative flex justify-center items-center">
      <Image
        src={image?.url || banner_bg}
        alt={image?.alternativeText || ""}
        width={image?.width || 1000}
        height={image?.height || 550}
        className="w-full h-screen md:max-h-[550px] relative object-cover"
      />
      <div className="p-8 absolute left-0 w-full h-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl lg:text-5xl text-center text-bold text-white font-bold uppercase">
          {title}
        </h1>
        {text !== "" && (
          <p className="md:text-base text-white/85 font-sans text-center md:max-w-xl md:mx-auto">
            {text}
          </p>
        )}
        {btn && link && <CtaButton href={link} text={btn} />}
      </div>
    </section>
  );
};

export default Banner;

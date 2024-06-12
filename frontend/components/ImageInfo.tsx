import React from "react";
import Image from "next/image";
import { BannerProps } from "@/lib/definitions";
import { getStrapiURL } from "@/lib/utils";

const ImageInfo = ({
  image,
  title,
  text,
  reverse = false,
  items,
}: BannerProps) => {
  const baseurl = getStrapiURL();
  let imageurl = "";
  if (image) imageurl = baseurl + image?.url;
  return (
    <div
      className={`container p-8 gap-4 flex justify-between items-center flex-col-reverse ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <Image
        src={imageurl || "/imageframe.png"}
        alt={image?.alternativeText || ""}
        width={image?.width || 650}
        height={image?.height || 650}
        className=""
      />
      <div className="xl:max-w-2xl space-y-3">
        <h2 className="font-sans font-bold text-3xl lg:text-4xl text-center lg:text-left">
          {title}
        </h2>
        <p className="font-sans text-sm xl:text-base text-center lg:text-left">
          {text}
        </p>
        {items &&
          items.map((item: any, index: number) => (
            <div className="flex items-center mt-2" key={index}>
              {item.icon && (
                <div className="md:p-2 border rounded-sm bg-[#D61837] flex items-center justify-center ">
                  <item.icon color="white" size={20} />
                </div>
              )}
              {item.desc && (
                <p className="font-sans text-sm ml-2 text-center lg:text-left">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageInfo;

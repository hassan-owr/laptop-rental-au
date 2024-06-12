"use client";
import React from "react";
import Link from "next/link";
import { MdAdsClick } from "react-icons/md";
import Image from "next/image";

const eventsData = [
  {
    title: "Check-in & Registration",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img1.png",
  },
  {
    title: "Event & Festival Wi-Fi",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img2.png",
  },
  {
    title: "Event Apps & Software",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img3.png",
  },
  {
    title: "Global Fulfilment",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img4.png",
  },
  {
    title: "Customer Support",
    eventdate: "15th Dec",
    href: "/eventrental/corporate-event",
    image: "/hp_img5.png",
  },
];

function EventDateCards() {
  return (
    <section className="container space-y-4 p-8 text-center">
      <h2 className="text-3xl lg:text-4xl max-w-3xl mx-auto text-center font-Barlow font-bold">
        G&apos;day Event Organisers and Audiences Down Under{" "}
      </h2>
      <p className="text-gray-500 text-center max-w-3xl mx-auto text-sm lg:text-base">
        Effortless check-in & registration, seamless event Wi-Fi, cutting-edge
        event apps, worldwide fulfillment, and dedicated customer support – we
        help Australian events with unparalleled services for organizers and
        attendees alike.{" "}
      </p>

      <div className="flex items-center gap-8 justify-center h-full w-full flex-col md:flex-row">
        {eventsData.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-full overflow-hidden w-full ${
              index === 2
                ? "md:h-[550px] 2xl:h-[650px]"
                : index === 1 || index === 3
                ? "md:h-[450px] 2xl:h-[550px]"
                : "md:h-[350px] 2xl:h-[400px]"
            } max-h-[175px] md:max-h-full md:hover:h-[550px] 2xl:hover:h-[650px] transition-all ease-in duration-300`}
          >
            <Image
              src={item.image}
              alt=""
              width={250}
              height={650}
              className="w-full h-full object-cover"
            />
            <div className="bg-black/50 p-2 w-full h-full absolute top-0 left-0 group flex flex-col justify-center items-center text-center gap-4">
              <h6 className="text-xl xl:text-2xl uppercase font-semibold text-wrap whitespace-pre-wrap text-white">
                {item.title}
              </h6>

              <strong
                className={`text-white text-3xl text-wrap whitespace-pre-wrap ${
                  index === 2 ? "opacity-100" : "lg:opacity-0"
                } group-hover:opacity-100 transition-all duration-300 ease-in`}
              >
                {item.eventdate}
              </strong>

              <Link
                href={item.href}
                className={`cursor-pointer text-white self-center ${
                  index === 2 ? "opacity-100" : "lg:opacity-0"
                } group-hover:opacity-100 transition-all duration-300 ease-in hover:text-primary-red focus-within:text-primary-red`}
              >
                <MdAdsClick size={30} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventDateCards;

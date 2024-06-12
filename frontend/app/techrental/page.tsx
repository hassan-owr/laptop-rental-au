import React from "react";
import Banner from "@/components/Banner";
import ImageInfo from "@/components/ImageInfo";
import { ImPageBreak } from "react-icons/im";
import { FaWater } from "react-icons/fa";
import ServicesTimeline from "@/components/ServicesTimeline";
import SidebarWithTab from "./_components/SidebarWithTab";
import TabCards from "./_components/TabCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Technology Rental Excellence",
  description:
    "Boost your events with our event technology rental in Australia. Smooth solutions for events like conferences, festivals, and more. Contact us",
  keywords: [
    "Technology rental (event technology rental)",
    "tech rental for events",
    "technology rental company",
    "technology rental service",
    "IT rental (IT rental for events)",
    "Hire IT equipment (Hire IT equipment for events)",
  ],
};

function TechRental() {
  return (
    <>
      <Banner
        title="Event Technology Rental Excellence"
        text="Laptop Rental is your premier destination for event technology rental solutions in Australia."
        link="/contactus"
        btn="Contact us"
      />

      <ImageInfo
        title="Connect to Excellence: Unlock the Future with Event Technology Rental."
        text="Enter Laptop Rental - your premier partner for event technology rental in Australia. We specialise in providing a wide range of top-quality tech rental for events. From business conferences and seminars to festivals and product launches, we offer tailored solutions to meet diverse event needs."
      />

      <div className="flex flex-col md:flex-row gap-8 justify-between container p-8">
        <SidebarWithTab />
        <TabCards />
      </div>

      <ServicesTimeline />

      <ImageInfo
        title="IT Rental for Events"
        reverse
        text="As a leading technology rental company, our mission is to empower businesses and individuals by providing cutting-edge and reliable technology solutions for their short-term and long-term events needs. Our comprehensive IT rental for events caters to a diverse range of needs, providing top-notch laptops, iPads, and other essential technology. With a focus on reliability and flexibility, our offerings ensure that your event runs smoothly, from hassle-free check-ins to flawless presentations. Our dedicated team is committed to providing 24/7 assistance, both on-site and remotely, ensuring that technical support is readily available whenever you need it. Hire IT equipment for events, and let us contribute to the success of your gatherings with cutting-edge technology and professional support.
        Your Event, Our Technology Rental Company: Reasons We Stand Out"
        items={[
          { icon: ImPageBreak, desc: "Accidental Breakage" },
          { icon: FaWater, desc: "Water Damage" },
          { icon: ImPageBreak, desc: "Extended Warranty" },
        ]}
      />
    </>
  );
}

export default TechRental;

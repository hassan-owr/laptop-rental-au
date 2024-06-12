import React from "react";

export interface PageProps {
  params: { slug: string; id: string };
}

export interface BannerImageProps {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface BannerItem {
  icon: React.ElementType;
  desc: string;
}

export interface BannerProps {
  btn?: string;
  link?: string;
  title: string;
  text: string;
  reverse?: boolean;
  image?: BannerImageProps;
  items?: BannerItem[];
}

export interface ProductInfoTabItemProps {
  value: string;
  content: string;
}

export interface EventCardProps {
  imagesrc: string;
  alternativeText: string;
  title: string;
  description: string;
  href: string;
  ctatext: string;
}

export interface EventItemTypes {
  data: {
    id: string;
    slug: string;
    NavMenuName: string;
  }[];
}

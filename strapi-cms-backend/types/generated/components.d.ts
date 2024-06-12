import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaqs extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faqs';
    icon: 'question';
    description: '';
  };
  attributes: {
    Question: Attribute.String & Attribute.Required;
    Answer: Attribute.Text & Attribute.Required;
  };
}

export interface HeroSectionTextImageSection extends Schema.Component {
  collectionName: 'components_hero_section_text_image_sections';
  info: {
    displayName: 'TextImageSection';
    icon: 'dashboard';
  };
  attributes: {
    HeroTitle: Attribute.String & Attribute.Required;
    HeroDescription: Attribute.Text & Attribute.Required;
    HeroImage: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faqs': FaqFaqs;
      'hero-section.text-image-section': HeroSectionTextImageSection;
    }
  }
}

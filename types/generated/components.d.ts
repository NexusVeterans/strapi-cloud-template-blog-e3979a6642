import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_blocks';
  info: {
    displayName: 'CTA Block';
  };
  attributes: {
    link: Schema.Attribute.Component<'elements.link', false>;
    name: Schema.Attribute.String;
  };
}

export interface BlocksEmbedBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_embed_blocks';
  info: {
    displayName: 'Embed Block';
  };
  attributes: {};
}

export interface BlocksParagraphBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_blocks';
  info: {
    displayName: 'Paragraph Block';
  };
  attributes: {
    body: Schema.Attribute.Text;
  };
}

export interface BlocksRichBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_blocks';
  info: {
    displayName: 'Rich Block';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right', 'start', 'end', 'justify']
    >;
    content: Schema.Attribute.Blocks;
    name: Schema.Attribute.String;
  };
}

export interface BlocksTitleBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_title_blocks';
  info: {
    displayName: 'Title Block';
  };
  attributes: {
    primary: Schema.Attribute.String;
    secondary: Schema.Attribute.String;
    tertiary: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'elements.link', false>;
    socialLink: Schema.Attribute.Component<'elements.link', true>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'elements.link', false>;
    logoText: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    image: Schema.Attribute.Media<'images'>;
    titleBlock: Schema.Attribute.Component<'blocks.title-block', false>;
  };
}

export interface UtilitiesAlterations extends Struct.ComponentSchema {
  collectionName: 'components_utilities_alterations';
  info: {
    displayName: 'Alterations';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cta-block': BlocksCtaBlock;
      'blocks.embed-block': BlocksEmbedBlock;
      'blocks.paragraph-block': BlocksParagraphBlock;
      'blocks.rich-block': BlocksRichBlock;
      'blocks.title-block': BlocksTitleBlock;
      'elements.link': ElementsLink;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'sections.hero-section': SectionsHeroSection;
      'utilities.alterations': UtilitiesAlterations;
    }
  }
}

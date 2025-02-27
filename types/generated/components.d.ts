import type { Schema, Struct } from '@strapi/strapi';

export interface BeteiligteBeteiligte extends Struct.ComponentSchema {
  collectionName: 'components_beteiligte_beteiligtes';
  info: {
    description: '';
    displayName: 'Beteiligte';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Rolle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'beteiligte.beteiligte': BeteiligteBeteiligte;
    }
  }
}

import { Deserializer } from 'jsonapi-serializer';

export const deserializer = new Deserializer({ keyForAttribute: 'CamelCase' })
  .deserialize;

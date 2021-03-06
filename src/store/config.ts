import Store from 'electron-store';
import { JSONSchemaType } from 'json-schema-typed';

export const schema = {
  useMacOSWindowActionButtons: {
    type: JSONSchemaType.Boolean,
    default: false
  },
  windowBounds: {
    type: JSONSchemaType.Object,
    default: {
      width: 1100,
      minWidth: 1000,
      height: 700,
      minHeight: 600
    }
  }
}

export const config = new Store({
  schema,
  watch: true
})
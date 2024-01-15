import type {App} from 'vue'
import vuetify from './vuetify'
import pinia from "./pinia";
import vueSchemaForms from "./vueSchemaForms";
import i18n from "./i18n";

export function registerPlugins(app: App) {
  app.use(vuetify)
  app.use(pinia)
  app.use(i18n)
  app.use(vueSchemaForms)
}

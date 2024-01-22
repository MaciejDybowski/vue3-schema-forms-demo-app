<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Vue Schema Forms Demo App</h2>
          </v-col>
          <v-col cols="12">
            <development-table
              :schema="schema"
              :model="model"
              :options="formOptions"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
//
import DevelopmentTable from "@/components/DevelopmentTable.vue";
import {ref} from "vue";

document.title = "Vue Schema Forms Demo App"

const formOptions = ref({});
const model = ref({});
const schema = ref({
  "type": "object",
  "properties": {
    "invoiceMetadata": {
      "properties": {
        "pricing": {
          "label": "The invoice is issued:",
          "layout": {
            "component": "radio-button",
            "cols": 3,
            "fillRow": true
          },
          "default": {
            "value": "net",
            "title": "at net prices",
            "formatted": "net"
          },
          "source": {
            "items": [
              {
                "value": "net",
                "title": "at net prices",
                "formatted": "net"
              },
              {
                "value": "gross",
                "title": "at gross prices",
                "formatted": "gross"
              }
            ],
            "returnObject": true
          }
        }
      }
    },
    "data": {
      "properties": {
        "items": {
          "layout": {
            "component": "duplicated-section",
            "schema": {
              "properties": {
                "product": {
                  "label": "Product",
                  "layout": {
                    "component": "text-field",
                    "cols": 4
                  }
                },
                "quantity": {
                  "label": "Quantity",
                  "type": "number",
                  "default": 1,
                  "layout": {
                    "component": "text-field",
                    "cols": 2
                  }
                },
                "price": {
                  "label": "Price ({invoiceMetadata.pricing.formatted})",
                  "type": "number",
                  "layout": {
                    "component": "text-field",
                    "cols": 3
                  }
                },
                "value": {
                  "label": "Value",
                  "type": "number",
                  "layout": {
                    "component": "text-field",
                    "cols": 3
                  },
                  "calculation": "quantity * price"
                }
              }
            }
          }
        }
      }
    },
    "summary": {
      "properties": {
        "sumValue": {
          "label": "SUM(Value)",
          "layout": {
            "component": "text-field",
            "cols": 4
          },
          "calculation": "SUM(value, data.items) - 300",
          "type": "number"
        }
      }
    }
  }
});

</script>

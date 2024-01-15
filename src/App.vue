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
  type: 'object',
  properties: {
    field1: {
      label: 'Field 1',
      layout: {
        component: 'text-field',
      },
    },
  },
});

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <span class="v-card-title ml-0 pl-0">JSON Schema</span>
        <vue-json-pretty :data="schema"/>
      </v-col>
      <v-col cols="6">
        <span class="v-card-title ml-0 pl-0">Form Model</span>
        <vue-json-pretty :data="model"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import {ref} from "vue";

const props = defineProps({
  schema: {
    type: null,
    required: true,
  },
  model: {
    type: null,
    required: true,
  },
});

const fileWithJSONSchema = ref()

function uploadFileAndLoad() {

}
</script>

<style scoped lang="scss"></style>

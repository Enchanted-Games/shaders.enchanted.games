<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: "sampler2d",
  },
});
</script>

<template>
  <code>{{ type }} {{ name }}</code>
</template>

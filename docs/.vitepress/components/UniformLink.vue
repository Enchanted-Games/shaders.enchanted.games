<script setup lang="ts">
import { prefixVersionToPath } from "../util/versionPathUtil";

const props = defineProps({
  ver: {
    type: String,
    required: true,
  },
  uniform: {
    type: String,
    required: true,
  },
});

const uniformLink = prefixVersionToPath(`/shaders/uniforms#` + props.uniform, props.ver);
</script>

<template>
  <a :href="uniformLink">
    <code>{{ uniform }}</code>
  </a>
</template>

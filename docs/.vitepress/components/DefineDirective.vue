<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
});

let defineString = `#${props.name}`;
if (props.type) {
  defineString += ` (${props.type})`;
}
</script>

<template>
  <code>{{ defineString }}</code>
</template>

<template>
  <div id="grade_cont">
    <img
      src="error.svg"
      alt="refresh icon"
    >
    <p>Error 401</p>
  </div>
  <button
    id="retry_button"
    @click="$emit('retry')"
  >
    <img
      src="refresh.svg"
      alt="refresh icon"
    >
    Try Again
  </button>
</template>
<!-- <script lang="ts">
export default {
	props: ['entry','test']
  }
</script> -->
<script setup lang="ts">
import { defineEmits } from 'vue';

const onClickRetry = () => {
  
  // const instance = getCurrentInstance();
  // instance?.proxy?.$forceUpdate();
}

const emit = defineEmits<{
  (e: 'retry', value: boolean): void
}>()
</script>

<style scoped>
#grade_cont {
  color: #E61A1A
}

#retry_button {
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>

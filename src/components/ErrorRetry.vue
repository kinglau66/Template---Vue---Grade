<template>
  <div class="flex flex-col gap-5 mt-16 justify-center">
    <div id="grade_cont" class="self-center">
      <img
        src="error.svg"
        alt="refresh icon"
      >
      <p class="text-center">Error 401</p>
    </div>
    <button
      id="retry_button"
      class="w-48 h-10 inline-block self-center"
      @click="$emit('retry')"
    >
      <img
      class="inline-block align-middle"
        src="refresh.svg"
        alt="refresh icon"
      >
      Try Again
    </button>
  </div>
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

  & #text{
    font-family: 'Lato';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;


  }
}
</style>

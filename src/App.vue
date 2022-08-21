<template>
  <h1 class="student mt-5">Students</h1>
  <GradeTracker />
</template>

<script setup lang="ts">
import GradeTracker from './components/GradeTracker.vue';
GradeTracker
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.student {
  top: 3 rem;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: #000000;
}
</style>

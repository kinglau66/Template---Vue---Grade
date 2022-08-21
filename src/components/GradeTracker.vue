<template>
  <div id="grade_cont">
    <p class="flex flex-row">
      <small id="student_label">{{ grade?.name }}</small>
      <span
        id="student_id"
        class="text-sm"
      >
        {{ grade?.student_id }}
      </span>
      <span
        id="courses"
        class="text-right"
      >
        {{ grade?.course_ids?.join(', ') }}
      </span>
      <!-- <span id="gpa">
        {{ grade?.accMarks }}
      </span> -->
      <span>GPA</span>
      <span id="student_id">
        {{ gpa }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref, defineProps } from 'vue';
export interface Grade {
  name?: String,
  student_id?: number,
  course_ids?: string[],
  accMarks?: number
}

const gpa: Ref<string> = ref('');
const props = defineProps<{
  grade: Grade
  test?: string,
}
>()

onMounted(() => {
  if (!props.grade?.accMarks || !props.grade?.course_ids) {
    return;
  }
  let tempGPA = props.grade?.accMarks / props.grade?.course_ids?.length ?? 0
  gpa.value = tempGPA.toFixed(1)
})
</script>

<style scoped>
</style>

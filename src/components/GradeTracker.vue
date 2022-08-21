<template>
  <div id="grade_cont">
    <p class="flex flex-col">
      <small id="student_label">{{ grade?.name }}</small>
      <span
        id="student_id"
        class="text-sm"
      >
        {{ grade?.student_id }}
      </span>
      <span
        id="courses"
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
#grade_cont {
  height: 210px;
  width: 230px;
  left: 957px;
  top: 370px;
  border-radius: 0px;

  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  & #student_label {

    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #000000;
  }

  & #student_id {

    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 58px;

    color: #000000;
    margin: 0 0 0 0;
  }

  & #courses {

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    /* or 125% */

    color: #000000;
  }

  & #gpa {

    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 58px;
    display: flex;
    align-items: flex-end;
    text-align: right;

    color: #000000;
  }

  & #gpa_label {

    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: flex-end;
    text-align: right;

    color: #000000;
  }
}
</style>

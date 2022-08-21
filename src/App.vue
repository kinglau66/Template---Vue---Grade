<template>
  <h1 class="student mt-5">Students</h1>
  <GradeTracker />
  <ErrorRetry
    v-if="isError"
    @retry="onClickRetry"
  />
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import GradeTracker from './components/GradeTracker.vue';
import Grade from './model/grade.model'
import wretch from 'wretch';
import { retry } from "wretch/middlewares/retry"
import AbortAddon from "wretch/addons/abort"

GradeTracker
const API_URL = `api/grades`;
let grades: any[] = []
let studentmap: Map<String, Grade> = new Map();
let students: Ref<Grade[]> = ref([])
let grade: Grade = {}
let isError: Ref<boolean> = ref(false)

const init = () => {
  grades = [];
  studentmap = new Map();
  students.value = [];
  grade = {};
  isError.value = false;
}

const setup = async () => {
  const url = `${API_URL}`;
  let fetchRes: any[] = await wretch(url)
    .middlewares([retry({ retryOnNetworkError: true, maxAttempts: 2, until: (res)=> res?.clone().json().then(body =>body.length > 0) ?? false})])
    .addon(AbortAddon())
    .get()
    .setTimeout(3000)
    .onAbort(() => isError.value = true)
    .internalError(() => isError.value = true)
    .error(502, () => isError.value = true)
    .json();
  grades = fetchRes
  // reducer to change map for proecssing purpose
  const reducer = (prevMap: Map<String, any>, currItem: any) => {
    let selectStudent = { ...prevMap.get(currItem.student_id) };
    if (selectStudent?.student_id) {
      selectStudent.accMarks += currItem.course_grade
      selectStudent.course_ids = [...selectStudent.course_ids, currItem.course_id]
    } else {
      selectStudent = {};
      selectStudent = currItem;
      selectStudent.accMarks = currItem.course_grade;
      selectStudent.course_ids = [currItem.course_id]
    }
    selectStudent.name = 'Student'
    prevMap.set(currItem.student_id, selectStudent)
    return prevMap;
  }
  studentmap = grades.reduce(reducer, new Map());
  students.value = [...studentmap.values()]
  console.log(studentmap)
}
onMounted(setup);
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

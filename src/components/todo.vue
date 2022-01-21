<script setup lang="ts">
import { ref, reactive } from "vue";
import { todoType } from "./type";
defineProps<{
  msg?: string;
}>();
const count = ref(0);
function onClick(): void {
  count.value++;
}
function refresh(): void {
  count.value = 0;
}

const todo: todoType = reactive({
  id: 1,
  title: "",
  completed: false,
  content: "",
  date: new Date().toDateString(),
});

function setTitle(): void {
  todo.title = "这是title";
}
</script>
<template>
  <button @click="onClick">{{ count }}</button>
  <button @click="refresh">refresh</button>
  <p>{{ todo.title }}</p>
  <button @click="setTitle">setDate</button>
  <input type="text" v-model="todo.content" />
</template>

<style></style>

<template>
  <div>
    <input class="p-2 border-2 border-black rounded-md" v-model="taskName" type="text">
    <button class="p-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full" @click="addTask">Agregar</button>
  </div>
</template>

<script setup lang="ts">
const taskName = ref('')
const taskHistory = useTaskHistory()

const addTask = () => {
  if (taskName.value.trim() !== '') {
    taskHistory.addTask(taskName.value);
    taskName.value = '';
  }
}

</script>
  
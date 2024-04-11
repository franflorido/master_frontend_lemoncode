<template>
    <div class="p-2 grid grid-rows-[1fr,13fr]">
      <h1 class=" text-xl block mb-2 bg-blue-200 w-full text-center border-2 border-gray-300 rounded-md p-2 text-black">
        To do tasks
      </h1>
      <TaskList class=" bg-blue-100 h-full mb-2 w-full border-2 border-gray-300 rounded-md p-2 text-black"/>
      <AddTask class="py-2 flex flex-row" />
    </div>
</template>
  
<script>
import TodoList from '~/components/TaskList.vue';
import AddTask from '../components/AddTask.vue';

export default {
components: {
  AddTask,
  TodoList
}
}
</script>
  
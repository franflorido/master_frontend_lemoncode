import { defineStore } from 'pinia';

interface task {
    task: string,
    completed: boolean,
}

export const useTaskHistory = defineStore('TaskHistory', () => {
  // list of messages
  const tasks = ref<task[]>([]);

  // add message
  const addTask = (task:string) => {
    tasks.value.push({ task: task, completed: false });
  };

  // Función para alternar la completitud de una tarea
  const toggleTaskCompletion = (index:number) => {
    tasks.value[index].completed = !tasks.value[index].completed;
  };

  // Función para eliminar una tarea de la lista
  const removeTask = (index:number) => {
    tasks.value.splice(index, 1);
  };

  return {tasks, addTask, toggleTaskCompletion, removeTask};
},
{
  persist: true,
});

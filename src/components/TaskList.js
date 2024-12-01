// src/components/TaskList/TaskList.js

// Importujemy hook
import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
// Importujemy obiekt z wartościami filtra
import { statusFilters } from "../../redux/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Pobieramy tablicę zadań ze stanu Redux
  const tasks = useSelector((state) => state.tasks);
  // Pobieramy wartość filtra ze stanu Redux
  const statusFilter = useSelector((state) => state.filters.status);
  // Obliczamy tablicę zadań do wyświetlenia w interfejsie
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul>
      {visibleTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

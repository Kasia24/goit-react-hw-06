// src/components/TaskCounter/TaskCounter.jsx

// Importujemy hook
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  // Pobieramy tablicę zadań ze stanu Redux
  const tasks = useSelector((state) => state.tasks);

  // Na podstawie stanu Redux obliczamy dane pochodne
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};

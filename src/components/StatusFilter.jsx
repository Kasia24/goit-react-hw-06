// src/components/StatusFilter/StatusFilter.jsx

// Importujemy hook
import { useSelector } from "react-redux";
// Importujemy obiekt z wartościami filtra
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  // Pobieramy wartość filtra ze stanu Redux
  const filter = useSelector((state) => state.filters.status);

  return (
    <div>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};

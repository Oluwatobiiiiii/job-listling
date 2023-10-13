import { useState } from "react";
import "./index.css";
import FilterJobs from "./components/FilterJobs";
import Jobs from "./components/Jobs";

export default function App() {
  const [selected, showSelectedJobs] = useState([]);

  // ADD THE SELECTED FILTER TO THE ARRAY
  function addToSelectedJobs(selectedValue) {
    showSelectedJobs((prev) => {
      return [...prev, selectedValue];
    });
  }

  //remove the selected Job
  function removeTheSelectedJobs(value) {
    showSelectedJobs(selected.filter((skillValue) => skillValue !== value));
  }

  //REMOVE THE SELECTED FILTER TO THE ARRAY
  function ClearSelected() {
    showSelectedJobs([]);
  }

  return (
    <div>
      <Jobs addToSelectedJobs={addToSelectedJobs} selected={selected} />

      {selected.length > 0 && (
        <FilterJobs
          ClearSelected={ClearSelected}
          selected={selected}
          removeTheSelectedJobs={removeTheSelectedJobs}
        />
      )}
    </div>
  );
}

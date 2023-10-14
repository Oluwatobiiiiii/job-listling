import { useState } from "react";
import "./index.css";
import FilterJobs from "./components/FilterJobs";
import Jobs from "./components/Jobs";
import jobList from "./components/data.json";
import CodingNinja from "./components/codingNinja";

export default function App() {
  const [selected, showSelectedJobs] = useState([]);
  // const [filter, setFilter] = useState();

  // ADD THE SELECTED FILTER TO THE ARRAY
  function addToSelectedJobs(selectedValue) {
    showSelectedJobs((prev) => {
      return [...prev, selectedValue];
    });

    // filtering
    const filterdItems = jobList.filter(
      (data) =>
        data.languages.every((d) => selectedValue.includes(d)) ||
        data.tools.every((d) => selectedValue.includes(d)) ||
        selectedValue.includes(data.level)
    );
    console.log(filterdItems);
    console.log(selectedValue);

    //deep nesting through the array
    // for (let i = 0; i < jobList.length; i++) {
    //   for (let j = 0; j < jobList[i].length; j++) {
    //     console.log(jobList[j]);
    //   }
    // }

    //another one
    // for (let key in jobList) {
    //   // eslint-disable-next-line valid-typeof
    //   if (typeof jobList[key] === "array") {
    //     for (let nestedKey in jobList[key]) {
    //       console.log(jobList[key][nestedKey]);
    //     }
    //   } else {
    //     console.log(jobList[key]);
    //   }
    // }
  }

  // const filterdItems = jobList.filter((data) =>
  //   data.languages.every((d) => selected.includes(d.languages))
  // );
  // console.log(filterdItems);

  //   const data = [{"guid":"j5Dc9Z","courses":[{"id":3,"name":"foo"}]},
  // {"guid":"a5gdfS","courses":[{"id":1,"name":"bar"},{"id":3,"name":"foo"}]},{
  // "guid":"jHab6i","courses":[{"id":7,"name":"foobar"}]}];
  // const courses = [1, 6, 3];

  // const r = data.filter(d => d.courses.every(c => courses.includes(c.id)));
  // console.log(r);

  // 1. get the desired array
  // 2. filter based on the array desired array
  // 3. check the job-list array if the desired filter is in the array
  //4. rerender the page if it is in there

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

      <CodingNinja />
    </div>
  );
}

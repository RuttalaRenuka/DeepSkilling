import React from "react";
import CohortDetails from "./components/CohortDetails";

function App() {

  const cohorts = [
    {
      name: "React Cohort",
      tech: "React JS",
      status: "ongoing"
    },
    {
      name: "Java Cohort",
      tech: "Spring Boot",
      status: "completed"
    },
    {
      name: "AI Cohort",
      tech: "Machine Learning",
      status: "ongoing"
    }
  ];


  return (
    <div>

      <h1>Cohort Tracker</h1>

      {
        cohorts.map((cohort, index) => (
          <CohortDetails
            key={index}
            name={cohort.name}
            tech={cohort.tech}
            status={cohort.status}
          />
        ))
      }

    </div>
  );
}

export default App;
import React, { Fragment } from "react";

import CardOne from "./Components/CardOne";
import ProgressCard from "./Components/ProgressCard";
import TimeTable from "./TimeTable";
import "./index.css";

function App() {
  return (
    <Fragment>
      <div className='content__wrapper d-grid'>
        <CardOne />
        <ProgressCard />
		<TimeTable />
      </div>
    </Fragment>
  );
}

export default App;

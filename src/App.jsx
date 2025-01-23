import React, { useState } from "react";
import InputLists from "./components/InputLists";
import TableData from "./components/Tabledata";

const App = () => {
  const [currentState, setCurrentState] = useState([]);

  return (
    <div className="body">
      <InputLists
        setCurrentState={setCurrentState}
        currentState={currentState}
      />
      <TableData
        currentState={currentState}
        setCurrentState={setCurrentState}
      />
    </div>
  );
};

export default App;

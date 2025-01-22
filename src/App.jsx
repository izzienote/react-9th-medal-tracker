import React, { useState } from "react";
import InputLists from "./components/InputLists";
import TableData from "./components/Tabledata";

const App = () => {
  const [scores, setScores] = useState([]);

  return (
    <div>
      <InputLists setScores={setScores} scores={scores} />
      <TableData scores={scores} />
    </div>
  );
};

export default App;

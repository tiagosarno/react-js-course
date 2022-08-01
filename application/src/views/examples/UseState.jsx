import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

const UseState = (props) => {
  const [input, setInput] = useState("");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <label>Input Text</label>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <h2>{input}</h2>
      </div>
    </div>
  );
};

export default UseState;

import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";

export default function UseEffect(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    //FIXME: Efeito executado antes do componente ser renderizado
    setInput("Setando valor antes da renderização do componente..");
  }, []);

  useEffect(() => {
    console.log("Efeito após mudança no elemento controlado (input)");
  }, [input]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <label>Input Text</label>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <h2>{input}</h2>
      </div>
    </div>
  );
}

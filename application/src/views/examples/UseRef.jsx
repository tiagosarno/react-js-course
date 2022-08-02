import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = (string1, string2) => {
  return [...string1].map((e, i) => `${e}${string2[i] || ""}`);
};

export default function UseRef(props) {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const count = useRef(0);

  const myInputRef1 = useRef(null);
  const myInputRef2 = useRef(null);

  useEffect(() => {
    count.current++;
    myInputRef2.current.focus();
  }, [input]);

  useEffect(() => {
    count.current++;
    myInputRef1.current.focus();
  }, [input2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(input, input2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          ref={myInputRef1}
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          ref={myInputRef2}
          className="input"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
    </div>
  );
}

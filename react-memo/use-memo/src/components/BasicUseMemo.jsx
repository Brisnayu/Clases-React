import React, { useState, useMemo } from "react";

const numbersList = [1, 2, 1, 4, 0, 6];

const mapScores = (scores, caller) => {
  console.log("Llamamos a esta función", caller);

  return scores.map((num, index) => {
    const calc = (num * 3) / 2;
    const color = calc < 3 ? "🔴" : "🟢";

    return (
      <p key={index}>
        {calc} {color}
      </p>
    );
  });
};

const BasicUseMemo = () => {
  const [rerender, setRerender] = useState(false);
  console.log(rerender);

  const marksContent = mapScores(numbersList, "no-useMemo");
  const marksContentMemo = useMemo(() => {
    return mapScores(numbersList, "useMemo");
  }, [])

  return (
    <div>
      <div>
        <h3>No use Memo</h3>
        {marksContent}
      </div>
      <div>
        <h3>Use Memo</h3>
        {marksContentMemo}
      </div>

      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
};

export default BasicUseMemo;

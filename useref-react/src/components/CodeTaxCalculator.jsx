import React, { useRef } from "react";

const CodeTaxCalculator = () => {
  const grossIncomeRef = useRef(null);
  const taxPercentRef = useRef(null);

  const getNetIncome = () => {
    const grossIncome = grossIncomeRef.current?.valueAsNumber;
    const taxPercent = taxPercentRef.current?.valueAsNumber;

    const total = grossIncome * (taxPercent / 100);
    console.log("The value to pay taxes: ", total);
  };

  return (
    <>
      <h3>Calculator Tax to pay</h3>
      <label htmlFor="grossIncome">
        <input
          type="number"
          name="grossIncome"
          id="grossIncome"
          min="0"
          ref={grossIncomeRef}
          defaultValue="0"
        />
      </label>
      <br />
      <label htmlFor="taxPercent">
        <input
          type="number"
          name="taxPercent"
          id="taxPercent"
          max="100"
          ref={taxPercentRef}
        />
      </label>
      <br />
      <button onClick={getNetIncome}>Tax to pay</button>
    </>
  );
};

export default CodeTaxCalculator;

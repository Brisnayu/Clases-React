const factory = () => {
  return (a, b) => a + b;
};

const sum1 = factory();
const sum2 = factory();

sum1(1, 2); // 3
sum2(1, 2); // 3

sum1 === sum2; // false (comparten el mismo código fuente, pero son objetos totalmente diferentes)
sum1 === sum1; // true

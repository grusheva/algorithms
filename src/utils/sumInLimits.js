export const sumInLimits = (a, b, limits = { min: -20, max: 0 }) => {
  const sum = a + b;

  if (sum > limits.max) {
    return limits.max;
  }
  if (sum < limits.min) {
    return limits.min;
  }
  return sum;
};

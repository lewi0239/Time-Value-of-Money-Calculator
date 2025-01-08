function calculateFutureValue(pv, rate, n) {
  return pv * Math.pow(1 + rate, n);
}

export { calculateFutureValue };

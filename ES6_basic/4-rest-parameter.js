export default function returnHowManyArguments(...args) {
  let sum;
  for (let i = 0; i < args; i += 1) {
    sum += i;
  }
  return sum;
}

export default function orderByProps({ ...iterObj }, settings) {
  const keysObj = Object.keys(iterObj).filter((word) => !settings.includes(word));
  const keySorted = [...keysObj].sort();
  const concatObj = [...settings, ...keySorted].map((x) => {
    for (const value in iterObj) {
      if (x === value) {
        return { key: x, value: iterObj[value] };
      }
    }
  });
  return concatObj;
}

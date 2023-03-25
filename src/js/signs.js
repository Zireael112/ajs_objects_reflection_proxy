export default function orderByProps({ ...iterObj }, settings) {
  const result = [];
  for (const setting of settings) {
    const template = { key: setting, value: iterObj[setting] };
    result.push(template);
    delete iterObj[setting];
  }

  const sortedKeys = Object.keys(iterObj).sort();

  for (const key of sortedKeys) {
    for (const org in iterObj) {
      if (key === org) {
        const template = { key: org, value: iterObj[org] };
        result.push(template);
      }
    }
  }

  return result;
}

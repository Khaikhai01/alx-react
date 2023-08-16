export default function accessImmutableObject(object, array) {
  if (object === undefined || array.length === 0) {
    return undefined;
  }
  
  let currentVal = object;

  for (const key of array) {
    if (currentVal instanceof Map) {
      currentVal = currentVal.get(key);
    } else if (typeof currentVal === 'object' && currentVal !== null) {
      currentVal = currentVal[key];
    } else {
      return undefined;
    }
  }

  return currentVal;
}

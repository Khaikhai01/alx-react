// export default function accessImmutableObject(object, array) {
//   if (!object || !Array.isArray(array) || array.length === 0) {
//     return undefined;
//   }
  
//   let currentVal = object;

//   for (const key of array) {
//     if (currentVal instanceof Map) {
//       currentVal = currentVal.get(key);
//     } else if (typeof currentVal === 'object' && currentVal !== null && key in value) {
//       currentVal = currentVal[key];
//     } else {
//       return undefined;
//     }
//   }

//   return currentVal;
// }

export default function accessImmutableObject(object, array) {
    if (!object || !Array.isArray(array) || array.length === 0) {
        return undefined;
    }

    let value = object;
    for (const key of array) {
        if (value instanceof Map) {
            value = value.get(key);
        } else if (typeof value === 'object' && value !== null && key in value) {
            value = value[key];
        } else {
            return undefined;
        }

    }
    return value;

}
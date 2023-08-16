const { fromJS, Map } = require('immutable');

// function getImmutableobjectect (object) {
//     if (typeof object !== 'object' || object === null) {
//         throw new Error('Input must be a valid object')
//     }

//     return fromJS(object);
// }

function getImmutableObject(object) {
    // Convert the object to an immutable Map
    const immutableMap = fromJS(object);
  
    return immutableMap;
  }

const oldMethod = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const newMethod = getImmutableObject(oldMethod);

console.log(newMethod);
const { fromJS, Map } = require('immutable');

function getImmutableObject (obj) {
    if (typeof obj !== 'object' || obj === null) {
        throw new Error('Input must be a valid object')
    }

    return fromJS(obj);
}

const oldMethod = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const newMethod = getImmutableObject(oldMethod);

console.log(newMethod.toString());
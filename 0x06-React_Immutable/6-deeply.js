import { Map, List } from 'immutable';

function mergeDeep(obj1, obj2) {
  return Map(obj1).mergeWith(
    (prevValue, newValue) => (
      Map.isMap(prevValue) && Map.isMap(newValue) ? mergeDeep(prevValue, newValue) : newValue
    ),
    obj2
  );
}

function mergeDeeplyElements(page1, page2) {
  const mergedMap = mergeDeep(page1, page2);
  const mergedList = List(mergedMap.values());
  return mergedList;
}


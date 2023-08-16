import { Map, List } from 'immutable';

export default function concatElements(page1, page2) {
    const concatenatedList = List(page1).concat(page2);
    return concatenatedList;
}

export default function mergeElements(page1, page2) {
    const mergedObject = Map(page1).merge(page2);
    const mergedList = List(mergedObject.values());
    return mergedList;
}

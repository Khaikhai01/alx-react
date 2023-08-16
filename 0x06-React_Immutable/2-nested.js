import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappObject = fromJS(object);

  return mappObject.getIn(array, undefined);
}
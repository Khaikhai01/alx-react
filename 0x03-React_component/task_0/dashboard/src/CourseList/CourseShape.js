import PropTypes from 'prop-types';

export default function CourseShape() {
  return PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  });
}

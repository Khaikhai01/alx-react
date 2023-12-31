import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerCell: {
    fontWeight: 'bold',
  },
  table: {
    marginTop: '2em',
    width: '100%',
    border: '1px solid #ddd',
    fontSize: '1.2rem',
    marginBottom: '15em',
  },
  
  th: {
    borderBottom: '1px solid #ddd'
  },
  
  th, td: {
    width: '80%',
    
  },
  
  table: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  tr: {
    textAlign: 'left',
    border: '1px solid #ddd',
  }
});

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  const cellStyle = isHeader ? styles.headerCell : null;

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(cellStyle)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(cellStyle)}>{textFirstCell}</th>
            <th className={css(cellStyle)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

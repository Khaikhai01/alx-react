import React from "react";
// import { ReactProps } from "react";
import Props from 'prop-types';

export default function CourseListRow ({ isHeader = false, textFirstCell, textSecondCell = null }) {
    if (isHeader) {
        if (textSecondCell === null) {
          return (
            <tr>
              <th colSpan={2}>{textFirstCell}</th>
            </tr>
          );
        } else {
          return (
            <tr>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </tr>
          );
        }
      } else {
        return (
          <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </tr>
        );
      }
    };
    
    CourseListRow.Props = {
      isHeader: Props.bool,
      textFirstCell: Props.string.isRequired,
      textSecondCell: Props.string,
    };

    CourseListRow.Props = {
      isHeader: Props.bool,
      textFirstCell: Props.string.isRequired,
      textSecondCell: Props.oneOfType([
          Props.string,
          Props.number,
      ]).isRequired,
  };
  
  CourseListRow.defaultProps = {
      isHeader: false,
      textSecondCell: null,
  };
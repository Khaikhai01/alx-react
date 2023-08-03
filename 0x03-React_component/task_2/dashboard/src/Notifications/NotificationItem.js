import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { markAsRead } from './Notifications.js';

class NotificationItem extends Component {
    render() {
      const { type, value, html, markAsRead, id } = this.props;
      return (
        <>
          {type && value ? (
            <li onClick={() => markAsRead(id)} data-notification-type={type}>
              {value}
            </li>
          ) : null}
          {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
      );
    }
  }


NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {
        console.log("Empty func");
    },
    id: 0,
};

export default NotificationItem;
import React from 'react';
import './badge.scss';
import PropTypes from 'prop-types';


const Badge = ({ label,notification_count,color,borderColor }) => (
  <div class="badge"><button style={{backgroundColor: color,borderColor: borderColor}} type="button" class="btn btn-primary">{label} <span class="badge">{notification_count}</span></button></div>
);

Badge.propTypes = {
  label: PropTypes.string,
  notification_number: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string
};

Badge.defaultProps = {
  label: 'Notification',
  notification_count: 0,
  color: '#337ab7',
  borderColor:'#2e6da4'
};
export default Badge;

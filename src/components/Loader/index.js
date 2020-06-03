import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import './loader.scss';

const Loading = ({ loaderState, text,color }) => {
  return (
    <div
      id="center_loader"
    >
      <Loader
        type="BallTriangle"
        color={color}
        height={100}
        width={100}
        visible={loaderState}
      />
      <label
        style={{
          display: loaderState ? 'block' : 'none',
          marginLeft: '-24px',
          color: 'red',
        }}
      >
        {text}
      </label>
    </div>
  );
};
Loading.propTypes = {
  loaderState: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
};
Loading.defaultProps = {
  loaderState: true,
  text: 'Loading...Please Wait.',
  color: '#c21c2e'
}
export default Loading;

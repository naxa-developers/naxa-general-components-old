import React, {Component} from 'react';
import './index.scss';
import propTypes from 'prop-types'

export default class ProgressBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        start: 0,
        end: 50
    }
  }

  render() {
    let completed = this.props.completed ? this.props.completed : this.state.end;
    if (completed < 0) {
      completed = 0
    }
    if (completed > 100) {
      completed = 100
    }
    const defaultStyle={
      width: completed+'%',
      backgroundColor: this.props.bgColor ? this.props.bgColor : 'cyan'
    }
    let labelClassName = this.props.labelClassName ? this.props.labelClassName : ''
    let progressClassName = this.props.wrapperClassName ? this.props.wrapperClassName : ''
    let labelProgress = <span className={labelClassName}>{completed}%</span>
    return (
      <div className={progressClassName}>
        <div style={defaultStyle}>
          {labelProgress}
        </div>
      </div>
    )
  }
}
ProgressBar.propTypes = {
    completed: propTypes.number,
    bgColor: propTypes.string
};


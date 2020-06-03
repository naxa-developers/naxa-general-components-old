import React, { Component } from 'react';
import Dropdown from './Dropdown';
import './dropdown.scss';

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: null,
    };
  }

  handleDropdown = fruits => {
    this.setState({ fruits });
  };

  render() {
    const { fruits } = this.state;
    const {styleClass,placeholder,data,style}=this.props;
    const selected = data&&data.filter(
      word => word.value === parseInt(fruits, 10),
    );
    console.log(selected, 'selected');
    return (
      <div>
        <label>Dropdown</label>
        <Dropdown
          data={data}
          styleClass={styleClass}
          style={style}
          value={fruits}
          placeholder={placeholder}
          onChange={this.handleDropdown}
        />
        <label class="selectedValue form-dropdown">
          Selected Option ==&gt;
          <label></label>
          {selected && selected[0] && selected[0].label}
        </label>
      </div>
    );
  }
}

export default Components;

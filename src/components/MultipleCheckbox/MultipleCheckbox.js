import React,{Component} from 'react';
import PropTypes from 'prop-types';

class MultipleCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selected:[],
      toggleDropdown:false
     }
  }
  handleClick=(value)=>{
    if(this.state.selected.includes(value)){
      const a = this.state.selected.filter(data => data !== value);
      a.sort();
      this.setState({selected:a});
    }
    else{
      const b = this.state.selected.concat(value);
      b.sort();
      this.setState({
        selected: b
      })
    }
  }
  handleToggle=()=>{
    this.setState(prevState => ({
      toggleDropdown: !prevState.toggleDropdown
    }));
  }
  render() {
    const {data,placeholder,style,styleClass}=this.props; 
    const {selected,toggleDropdown}=this.state;
    return ( 
      <div class={`select-dropdown${styleClass}`} id="filter_dropdown">
          <span onClick={this.handleToggle} class={`span-label ${toggleDropdown?'span-active':''}`}>{selected.length <= 0 ?placeholder: `${selected.join()}`}</span>
          <ul class={`select-list ${toggleDropdown?'active':''}`} id="dropdown-list" style={style}>
            {data && data.map((data,i)=>{return(
              <li class="checkbox">
                  <input type="checkbox" id={`check_time${i}`} onClick={()=>{this.handleClick(data.label)}}/>
                  <label for={`check_time${i}`}><i class="icon-ok-2"></i>{data.label}</label>
              </li>
            )})}
              
          </ul>
      </div>
     );
  }
}
 

MultipleCheckbox.propTypes = {
  placeholder: PropTypes.string,
  // data: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     label: PropTypes.string.isRequired,
  //     value: PropTypes.number.isRequired,
  //   }),
  //   ).isRequired,
    styleClass: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };
  
  MultipleCheckbox.defaultProps = {
    data : [
      { value: 1, label: 'Province 1' },
      { value: 2, label: 'Province 2' },
      { value: 3, label: 'Province 3' },
      { value: 4, label: 'Province 4' },
      { value: 5, label: 'Province 5' },
      { value: 6, label: 'Province 6' },
      { value: 7, label: 'Province 7' },
    ],
    value: '',
    styleClass: '',
    placeholder: 'Select Item',
  };
  
  export default MultipleCheckbox;
  
import React, { Component } from 'react';
import './listCollection.scss';

class List extends Component {
  static defaultProps = {
  };

  state = {
    
  };

  changeActiveItem(){
    var lists = document.getElementsByClassName("naxa-list-item");
    console.log(lists)
    const currentComponent = this;
    Object.keys(lists).map(function(key, index) {
      console.log(lists[key], "list")
      if(lists[key].classList.contains("naxa-active")){
        lists[key].classList.remove("naxa-active")
      }
      if(index==currentComponent.props.activeItem){
        lists[key].classList.add("naxa-active")
      }

    });
  }

  componentDidMount(){
    this.changeActiveItem();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.activeItem != this.props.activeItem){
      this.changeActiveItem();
    }
  }

  render() {
    return (
      <ul className="naxa-lists">
        <li className={"naxa-list-item "+this.props.class+"naxa-active"}>Cras justo odio</li>
        <li className={"naxa-list-item "+this.props.class}>Dapibus ac facilisis in</li>
        <li className={"naxa-list-item "+this.props.class}>Morbi leo risus</li>
        <li className={"naxa-list-item "+this.props.class}>Porta ac consectetur ac</li>
        <li className={"naxa-list-item "+this.props.class}>Vestibulum at eros</li>
      </ul>
    );
  }
}

export default List;

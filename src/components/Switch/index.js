import React, { Component } from 'react'
import './switch.styles.css';

class Switch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sliderChecked: false
        }
    }


    render() {
        const { sliderClass, showLabel, onColor } = this.props;
        return (
            <>
                <div>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className={sliderClass}
                            onClick={() => this.setState({ sliderChecked: !this.state.sliderChecked })}
                        ></span>
                        {
                            showLabel === true && <label for="checkbox1" class="checkbox-label" >
                                {this.state.sliderChecked === true ? 'On' : 'Off'}
                            </label>
                        }
                    </label>
                </div>

            </>
        )
    }
}

export default Switch;

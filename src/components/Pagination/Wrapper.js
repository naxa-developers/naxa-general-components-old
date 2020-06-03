import React, { Component } from 'react';
import Pagination from './index'

class Wrapper extends Component {


    constructor(props) {
        super(props)

        this.state = {
            presentPageData: [],
            activepage: 0
        }
    }

    onpageChanged = (a, p) => {
        this.setState({ presentPageData: a, activepage: p })
    }
    render() {
        return (
            <>
                <h3 style={{ color: 'Grey' }}>Give one function named 'onpageChanged' which updates  "activePage" and "presentPageData" of a Wrapper State</h3>
                <h4 style={{ color: 'Grey' }}>You have to send "activePage(default as 0)" from Wrapper state</h4>

                <h1 style={{ color: 'Grey' }}></h1>
                <div style={{ height: 100 ,border:'grey 1px solid',padding:5}}>


                    {this.state.presentPageData.map(a => {
                        return <p style={{ color: 'white' }}>{a}</p>
                    })}

                </div>

                <Pagination
                    key={this.props.data.toString() + this.props.numberInEachPage.toString() + this.state.activepage.toString()}
                    data={this.props.data}
                    onpageChanged={this.onpageChanged}
                    activePage={this.state.activepage}
                    numberInEachPage={this.props.numberInEachPage}
                    color={this.props.color}
                    backgroundColor={this.props.backgroundColor}

                //   pathColor={color('Color', 'black')}
                //   speed={number('Speed', 80, options)}
                //   withMarker={boolean('withMarker', false)}
                />
            </>
        );
    }
}

export default Wrapper;
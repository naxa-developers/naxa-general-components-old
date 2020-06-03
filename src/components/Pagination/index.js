import React, { Component } from 'react';
import './pagination.css'

class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activePage: this.props.activePage+1
        }
    }
    generatePages = (data, step) => {
        let arraylength = Math.ceil(data.length / step);
        let arrayToreturn = []
        for (var i = 1; i <= arraylength; i++) {
            arrayToreturn.push(i)

        }
        console.log(arrayToreturn, arraylength);
        return arrayToreturn;

    }

    chunk = (arr, chunkSize) => {
        var R = [];
        for (var i = 0, len = arr.length; i < len; i += chunkSize)
            R.push(arr.slice(i, i + chunkSize));
        return R;
    }

    onclick = (pageno) => {
      

        let chuncked = this.chunk(this.props.data, this.props.numberInEachPage);
        console.log(pageno)

        this.props.onpageChanged(chuncked[pageno - 1],(pageno-1))



    }

    componentDidMount() {
  
        this.props.onpageChanged(this.chunk(this.props.data,this.props.numberInEachPage)[this.props.activePage],this.props.activePage)
    }
 
    
    render() {
        return (
            <div class="main-div-pagination"  >
                <div class="num-div" style={{border:'none',opacity:this.props.activePage!=0?1:0.2}}  onClick={()=>{
                    this.props.activePage!=0&&this.props.onpageChanged(this.chunk(this.props.data,this.props.numberInEachPage)[this.props.activePage-1],this.props.activePage-1)
                }}>🠐 </div>
                {this.generatePages(this.props.data, this.props.numberInEachPage).map((a,i) => {
                    console.log(typeof this.state.activePage,this.state.activePage == (i+1))
                    return <div class={this.state.activePage == (i+1) ? 'num-div active' : "num-div"} onClick={() => this.onclick(i+1)} style={{color:this.props.color,backgroundColor:this.state.activePage == (i+1) ?"Orange": this.props.backgroundColor}}>
                        {a}

                    </div>
                })}
                <div class="num-div" style={{border:'none',opacity:this.props.activePage!=this.chunk(this.props.data,this.props.numberInEachPage).length-1?1:0.2}} onClick={()=>{
                    this.props.activePage!=this.chunk(this.props.data,this.props.numberInEachPage).length-1&&this.props.onpageChanged(this.chunk(this.props.data,this.props.numberInEachPage)[this.props.activePage+1],this.props.activePage+1)
                }}>🠒 </div>

            </div>
        );
    }
}

export default index;
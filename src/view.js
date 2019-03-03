import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd'
import {Link} from 'react-router'
import './style.css';

const liArr = ["&laquo;","&laquo;","&laquo;","&laquo;","&laquo;","&laquo;"];
var tempFlag = true;
class RiskInfo extends Component {
  constructor(props) {
    super(props);
    this.state={     
      tempClass: "leftArrow",
      tableContainer: "tableContainer",
      tempIndex:-1
    }
  }
  showList(item){ 
    if( tempFlag == true ) {
      tempFlag = false;
      this.setState({
        tempIndex: item
      })
      
    }else if(tempFlag == false){
      tempFlag = true;
      this.setState({
        tempIndex: -1
      })
      
    }
    
  }
  render() {    
    return (
      <div className="RiskInfo">
        <ul>
          {
            liArr.map((item,i)=>{
              return (
                <li key={i} onClick={this.showList.bind(this,i)}>
                  <span className={[this.state.tempClass,i===this.state.tempIndex?"downArrow":"leftArrow"].join(' ')}>&laquo;</span>
                  
                  <div className={[this.state.tableContainer,i!==this.state.tempIndex?"hide":"tableContainerActive"].join(' ')} ></div>
                </li>
              )
            })
          }
          
        </ul>
      </div>
    )
  }
 
  
}

export default RiskInfo;
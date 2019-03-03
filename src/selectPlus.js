import React, { Component } from 'react';
import './selectPlus.css'

class SelectPlus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectList: props.selectList,
            inputVal: '',
            activeArr: props.defaultValue,
         }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            selectList: nextProps.selectList
        })
    }
    inputChange=(e)=>{
        this.setState({
            inputVal: e.target.value
        })
    }

    searchCli=()=>{
        const {inputVal, activeArr} = this.state;
        this.props.onClick(inputVal, activeArr)
    }

    liCli(item, index){
        let {activeArr} = this.state;
        let {selectList} = this.state;
        if(activeArr.indexOf(item) === -1){
            // console.log("没有");
            // console.log(item);
            // console.log(activeArr);
            activeArr.push(item);
            let tempArr = [];
            tempArr = activeArr.filter(arrItem=>arrItem.id === item.id);
            console.log(tempArr);
            if(tempArr.length === 2){
                activeArr.pop();
                activeArr.map((arrItem, arrIndex)=>{
                    if(arrItem.id===tempArr[0].id){
                        // console.log(arrItem, arrIndex);
                        activeArr.splice(arrIndex, 1);
                    }
                })
            }
        }else{
            let index = activeArr.indexOf(item);
            // console.log("索引为",index)
            activeArr.splice(index, 1)
        }
        // console.log("activeArr==",activeArr);
        this.setState({
            activeArr,
            selectList
        });
    }

    render() { 
        const { selectList, inputVal, activeArr } = this.state;
        return ( 
            <div className="constainer">
                <div className="likeInput">
                    {activeArr.map(item=><span>{item.child}</span>)}
                </div>
                <input value={inputVal} onChange={this.inputChange} />
                <span onClick={this.searchCli}>search</span>
                <ul>
                {
                    selectList.map((item, index)=>{
                        return  <li key={item.id}  onClick={this.liCli.bind(this, item, index)}>{item.child}---{item.parent}<span style={{color: activeArr.find(i=>i.id===item.id)?"red": "#fff"}}>√</span></li>
                    })
                }
                </ul>
            </div> 
        );
    }
}
 
export default SelectPlus;
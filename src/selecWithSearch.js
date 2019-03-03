import React, { Component } from 'react';
import './selecWithSearch.css'

class selecWithSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectWithSearchList: props.selectWithSearchList,
            inputVal: '',
            selectActive: props.defaultValue,
         }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            selectWithSearchList: nextProps.selectWithSearchList
        })
    }
    inputChange=(e)=>{
        this.setState({
            inputVal: e.target.value
        })
    }

    searchCli=()=>{
        const {inputVal, selectActive} = this.state;
        this.props.onClick(inputVal, selectActive)
    }

    liCli(item, index){
        let {selectActive} = this.state;
        let {selectWithSearchList} = this.state;
        if(selectActive.indexOf(item) === -1){
            // console.log("没有");
            // console.log(item);
            // console.log(selectActive);
            selectActive.push(item);
            let tempArr = [];
            tempArr = selectActive.filter(arrItem=>arrItem.id === item.id);
            console.log(tempArr);
            if(tempArr.length === 2){
                selectActive.pop();
                selectActive.map((arrItem, arrIndex)=>{
                    if(arrItem.id===tempArr[0].id){
                        // console.log(arrItem, arrIndex);
                        selectActive.splice(arrIndex, 1);
                    }
                })
            }
        }else{
            let index = selectActive.indexOf(item);
            // console.log("索引为",index)
            selectActive.splice(index, 1)
        }
        // console.log("selectActive==",selectActive);
        this.setState({
            selectActive,
            selectWithSearchList
        });
    }

    render() { 
        const { selectWithSearchList, inputVal, selectActive } = this.state;
        return ( 
            <div className="constainer">
                <div className="likeInput">
                    {selectActive.map(item=><span>{item.listChild}</span>)}
                </div>
                <input value={inputVal} onChange={this.inputChange} />
                <span onClick={this.searchCli}>search</span>
                <ul>
                {
                    selectWithSearchList.map((item, index)=>{
                        return  <li key={item.id}  onClick={this.liCli.bind(this, item, index)}>{item.listChild}---{item.listParent}<span style={{color: selectActive.find(i=>i.id===item.id)?"red": "#fff"}}>√</span></li>
                    })
                }
                </ul>
            </div> 
        );
    }
}
 
export default selecWithSearch;
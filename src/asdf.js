import React, { Component } from 'react';
import SelecWithSearch from "./selecWithSearch";

class Asdf extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectWithSearchList: [{
                id:1,listChild: '分类1',listParent: '父类1'
            },{
                id:2,listChild: '分类2',listParent: '父类1'
            },{
                id:3,listChild: '分类3',listParent: '父类1'
            },{
                id:4,listChild: '分类22',listParent: '父类2'
            },{
                id:5,listChild: '分类23',listParent: '父类2'
            },{
                id:6,listChild: '分类24',listParent: '父类2'
            }],
            selectWithSearchLists:[{
                id:1,listChild: '分类1',listParent: '父类1'
            },{
                id:2,listChild: '分类2',listParent: '父类1'
            },{
                id:3,listChild: '分类3',listParent: '父类1'
            },{
                id:4,listChild: '分类22',listParent: '父类2'
            },{
                id:5,listChild: '分类23',listParent: '父类2'
            },{
                id:6,listChild: '分类24',listParent: '父类2'
            }],
            defaultValue: [{
                id:6,listChild: '分类24',listParent: '父类2'
            }]
         }
    }

    selectSearch=(inputVal, selectActive)=>{
        let { selectWithSearchList,selectWithSearchLists} = this.state;
        let temp = [];
        if(inputVal){
            console.log(temp)
            temp = selectWithSearchLists.filter(item=>(item.listChild.includes(inputVal) || item.listParent.includes(inputVal)));
        }else{
            temp = selectWithSearchLists
        }
        console.log(temp);
        this.setState({
            selectWithSearchList: temp,
            defaultValue: selectActive
        })
    }

    render() { 
        const { selectWithSearchList, defaultValue } = this.state;
        return ( 
            <div>
                <SelecWithSearch selectWithSearchList = {selectWithSearchList} onClick={this.selectSearch} defaultValue = {defaultValue} />
            </div>
         );
    }
}
 
export default Asdf;
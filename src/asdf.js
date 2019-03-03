import React, { Component } from 'react';
import SelectPlus from "./selectPlus";

class Asdf extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectList: [{
                id:1,child: '分类1',parent: '父类1'
            },{
                id:2,child: '分类2',parent: '父类1'
            },{
                id:3,child: '分类3',parent: '父类1'
            },{
                id:4,child: '分类22',parent: '父类2'
            },{
                id:5,child: '分类23',parent: '父类2'
            },{
                id:6,child: '分类24',parent: '父类2'
            }],
            selectLists:[{
                id:1,child: '分类1',parent: '父类1'
            },{
                id:2,child: '分类2',parent: '父类1'
            },{
                id:3,child: '分类3',parent: '父类1'
            },{
                id:4,child: '分类22',parent: '父类2'
            },{
                id:5,child: '分类23',parent: '父类2'
            },{
                id:6,child: '分类24',parent: '父类2'
            }],
            defaultValue: [{
                id:6,child: '分类24',parent: '父类2'
            }]
         }
    }

    selectSearch=(inputVal, activeArr)=>{
        let { selectList,selectLists} = this.state;
        let temp = [];
        if(inputVal){
            console.log(temp)
            temp = selectLists.filter(item=>(item.child.includes(inputVal) || item.parent.includes(inputVal)));
        }else{
            temp = selectLists
        }
        console.log(temp);
        this.setState({
            selectList: temp,
            defaultValue: activeArr
        })
    }

    render() { 
        const { selectList, defaultValue } = this.state;
        return ( 
            <div>
                <SelectPlus selectList = {selectList} onClick={this.selectSearch} defaultValue = {defaultValue} />
            </div>
         );
    }
}
 
export default Asdf;
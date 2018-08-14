/**
 * Created by lina on 2018/6/13.
 */

import React, { Component } from 'react'
import styles from '../../../../styles/common/common.less'
import CheckboxItem from './components/CheckboxItem'


class CheckboxList extends Component {
    constructor(props){
        super(props);


        this.state= {
            checkedAll: false,
            checkedInvert: false,
            data: [
                {
                    name: 'red',
                    checked: true
                },
                {
                    name: 'blue',
                    checked: false
                },
                {
                    name: 'yellow',
                    checked: false
                },
                {
                    name: 'white',
                    checked: true
                }
            ],
        }

        this.handleChangeAll=this.handleChangeAll.bind(this);
        this.handleChangeInvert=this.handleChangeInvert.bind(this);
    }
    




    // 全选事件
    handleChangeAll(){
        const { checkedAll,data } = this.state;

        data.map(function(item,index){
            return item.checked = !checkedAll;
        })

        this.setState({
            checkedAll: !checkedAll,
            checkedInvert: false,
            data: data
        });
    }

    // 反选事件
    handleChangeInvert(){
        const { checkedInvert, data } = this.state;

        data.map(function(item,index){
            return item.checked = !item.checked;
        })

        const checkedAll = data.every(function(item,index){
            return item.checked;
        })

        this.setState({
            checkedAll: checkedAll,
            checkedInvert: !checkedInvert,
            data: data
        });
    }



    handleItemChange(ckitem){
        const data= this.state.data;
        const checked= ckitem.checked;
        let checkedInvert=this.state.checkedInvert;

        data.map(function (item,index) {
            if(item.name=ckitem.name){
                return item.checked= ckitem.checked;
            }
        })

        const checkedAll=data.every(function (item,index) {
            return item.checked;
        })

        checkedInvert = checkedAll ? false : checkedInvert;

        this.setState({
            data: data,
            checkedAll: checkedAll,
            checkedInvert: checkedInvert
        })
    }

    renderList(){
        let that=this;
        return this.state.data.map(function (item,index) {
            return <CheckboxItem {...item} key={index} handleItemChange={ that.handleItemChange } />
        })
    }


    render(){
        const { checkedAll, checkedInvert } = this.state;
        return (
            <div>
                <div>
                    <label> <input type="checkbox" checked={checkedAll} onChange={this.handleChangeAll} /> 全选</label>
                    <label> <input type="checkbox" checked={checkedInvert} onChange={this.handleChangeInvert} /> 全选</label>
                </div>
                <div>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default CheckboxList



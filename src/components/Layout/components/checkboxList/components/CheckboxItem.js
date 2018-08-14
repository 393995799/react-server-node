/**
 * Created by lina on 2018/6/13.
 */

import React, { Component } from 'react'
import styles from '../../../../../styles/checkboxList.less'

class CheckboxItem extends Component {
    constructor(props){
        super(props)
        this.state={
            checked: props.checked,
            name: props.name
        }

        this.handleChange=this.handleChange.bind(this);

    }

    componentWillReceiveProps(nextProps,prevProps){
        if(nextProps.checked!= prevProps.checked){
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    handleChange(){
        const { checked, name }=this.state;
        this.setState({
            checked: !checked
        },function () {
            this.props.handleItemChnage({name: name, checked: props.checked})
        })
    }

    render(){

        const { checked, name } = this.props;
        return (
            <div>
                <label ><input type="checkbox" checked={checked} onChange={this.handleChange} /> {name}</label>
            </div>
        )
    }
}

export default CheckboxItem
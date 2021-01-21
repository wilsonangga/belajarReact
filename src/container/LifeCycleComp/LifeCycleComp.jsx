import React, {Component} from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component{
    //pertama dipanggil
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    //kedua dipanggil
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }

    //keempat dipanggil
    componentDidMount(){
        // console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }

    //kelima dipanggil
    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps', nextProps)
        console.log('nextState', nextState)
        console.log('this state : ', this.state)
        if(nextState.count >= 4){
            return false
        }
        return true
    }

    //keenam dipanggil
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componenWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    //ketiga dipanggil
    render(){
        console.log('render')
        return(
            <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;
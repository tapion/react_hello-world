import React, { Component } from 'react';
import styleClass from './Person.module.css';
// import styled from 'styled-components';

// const StyleDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px){
//         width: 450px;
//     }
// `

class Person extends Component{
    constructor(props){
        super(props);
        console.log('Person.js - Constructor');
        this.state = {
            toca: "tener un estado"
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log('Person.js - getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Person.js - shouldComponentUpdate');
        return true;
    }
    // const style = {
    //     '@media (ming-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    render(){
        console.log('Person.js - render');
        return (
            // <StyleDiv>
            <div className={styleClass.Person}>
                <p onClick={this.props.click}>Hello from Person's commponent, I'm {this.props.name}, and I'm {this.props.age} years old</p>
                <p><input type="text" onChange={this.props.change} value={this.props.name} /> </p>
                <p>{this.props.children}</p>            
            </div>
            // </StyleDiv>
            )
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Person.js - getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('Person.js - componentDidUpdate');
    }

    componentDidMount(){
        console.log('Person.js - componentDidMount');
    }
}

export default Person;
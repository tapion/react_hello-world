import React, { Component } from 'react';
import styleClass from './Person.module.css';
import Aux from '../../../hoc/Auxiliar';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

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
        this.inputElement = React.createRef();
        console.log('Person.js - Constructor');
        this.state = {
            toca: "tener un estado"
        }
    }

    static contextType = AuthContext;

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
            <Aux>
                {/* <div className={styleClass.Person}> */}
                    <p onClick={this.props.click}>Hello from Person's commponent, I'm {this.props.name}, and I'm {this.props.age} years old</p>
                    <p>
                        <input 
                            type="text" 
                            // ref={(inputElement) => { this.inputElement = inputElement}}
                            ref={this.inputElement}
                            onChange={this.props.change} 
                            value={this.props.name} /> 
                        </p>
                    <p>{this.props.children}</p>                      
                    {this.context.authenticated ? <p>Autenticado!!!</p> : <p>Por favor autentiquece</p>}
                       
                {/* </div> */}
            </Aux>
            
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
        this.inputElement.current.focus();
        console.log(this.context.authenticated)
    }
}

Person.propTypes = {
    children: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
}

export default withClass(Person,styleClass.Person);
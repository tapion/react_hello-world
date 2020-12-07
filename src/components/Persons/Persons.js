import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component{
  constructor(props){
    super(props);
    console.log('Persons.js - Constructor');
    this.state = {
      test: "prueba"
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Persons.js - shouldComponentUpdate')
    if(nextProps.persons !== this.props.persons){
      return true;
    }else{
      return false;
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log('Persons.js - getDerivedStateFromProps');
    return state;
  }

  render () {
    console.log('Persons.js - render');
    return this.props.persons.map((person, index) => {
      return (
          <Person 
            click={this.props.deletePersonHandler.bind(undefined,index)}
            name={person.name} 
            age={person.age}
            change={this.props.changePersonStateHandler.bind(undefined,person.id)}
            key={person.id} />
      )
    });
  }

  componentDidMount(){
    console.log('Persons.js - componenteDidMount');
  }

  componentDidUpdate(){
    console.log('Persons.js - componentDidUpdate');
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Persons.js - getSnapshotBeforeUpdete')
    return null;
  }

} 

  export default Persons;
import styleClass from  './App.module.css';
import React, { useState} from 'react';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Crockpit from '../components/Cockpit/Cockpit';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
// import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';
// import Validation from './Validation/Validation';
// import Char from './Char/Char';

function App() {

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'asdaq', name: "Miguel", age: 20},
      { id: 'sad', name: "Angel", age: 30},
      { id: 'ahggfhsdaq', name: "Vargas", age: 50},
      { id: 'fdsfs', name: "Cabezas", age: 50},
      { id: 'dfg', name: "Venegas", age: 50},
    ],
    otherProperty: 'This is a test',
    showPerson: false,
    showCockpit: true,
  });

  // const [userNames, setUserNamesState] = useState({
  //   userNames: [
  //     { userName: 'Dora'},
  //     { userName: 'Ismael'},
  //     { userName: 'Margoth'},
  //     { userName: 'Julio'},
  //   ]
  // })

  const changePersonStateHandler = (personId, event) => {
    const persons = [...personsState.persons];
    const personIndex = persons.findIndex(per => per.id === personId);
    persons[personIndex].name = event.target.value;
    setPersonsState({
      persons,
      otherProperty: personsState.otherProperty,
      showPerson: personsState.showPerson,
      showCockpit: personsState.showCockpit,
    });
  }

  // const ButtonStyled = styled.button`
  //   background-color: ${props => props.alt ? 'red': 'green'};
  //   color: white;
  //   font: inherit;
  //   border: 1px solid blue;
  //   padding: 8px;
  //   cursor: pointer;
    
  //   &:hover {
  //     background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
  //   }
  // `;

  // let styles = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer',
  //   ':hover': {
  //     backgroundColor: 'lightgreen'
  //   }
  // };

  const deletePersonHandler = indexPerson => {
    const persons = personsState.persons.slice();
    persons.splice(indexPerson,1);
     setPersonsState({
      persons: persons,
      otherProperty: personsState.otherProperty,
      showPerson: personsState.showPerson,
      showCockpit: personsState.showCockpit,
    });
  }

  const togglePersonHandler = () => {
    setPersonsState({
      persons: personsState.persons,
      showPerson: !personsState.showPerson,
      showCockpit: personsState.showCockpit,
    });    
    // Esto no se puede hacer en function components, se debe usar una libreria
    // styles.backgroundColor = 'red';
    // styles[':hover']={
    //   backgroundColor: 'red'
    // }
  }

  // const onChangeInputUserHandler = event => {
  //   setUserNamesState({
  //     userNames: [
  //       { userName: 'Diana'},
  //       { userName: 'Ismael'},
  //       { userName: 'Margoth'},
  //       { userName: event.target.value},
  //     ]
  //   })
  // }

  let person = null;

  if(personsState.showPerson){
    person = (
    <div>
      { 
        // <ErrorBoundary>
          <Persons
            persons={personsState.persons}
            deletePersonHandler={deletePersonHandler}
            changePersonStateHandler={changePersonStateHandler} />
        // </ErrorBoundary>
      }
      {/* <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        click={changePersonStateHandler.bind(this,'Juan Perez')} 
        change={onChangeInputHandler}
        >I like the dogs</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}  /> */}
    </div>
    );
    
  }


 
  return (
      <div className={styleClass.App}>
        {/* <button onClick={togglePersonHandler} >Click Me</button> */}
        <button onClick={() => {
          setPersonsState({
            persons: personsState.persons,
            otherProperty: personsState.otherProperty,
            showPerson: personsState.showPerson,
            showCockpit: !personsState.showCockpit
          }
        )}} >Esconder</button>
        { personsState.showCockpit ?
          <Crockpit 
          personLenght={6} 
          togglePersonHandler={togglePersonHandler}
          showPerson={false}
          /> : null
        }
        { person }
        {/* <UserInput change={onChangeInputUserHandler} 
          userName={userNames.userNames[3].userName} />
        <UserOutput userName={userNames.userNames[0].userName} />
        <UserOutput userName={userNames.userNames[1].userName} />
        <UserOutput userName={userNames.userNames[2].userName} />
        <UserOutput userName={userNames.userNames[3].userName} /> */}
      </div>
  );
  // const onChangeInputHandler = event => {
  //   setPersonsState({persons: [
  //     { name: "Miguel - Tapion", age: 20},
  //     { name: event.target.value, age: 30},
  //     { name: "Cabezas", age: 63},
  //   ],
  //   otherProperty: personsState.otherProperty
  //   });
  // }

  // const [taskState, setTaskState] = useState(
  //   {
  //     length: 0,
  //     charArray: [],
  //     text: ''
  //   }
  // );

  // const changeInputHandler = (event) =>{
  //   setTaskState({
  //     length: event.target.value.length,
  //     charArray: event.target.value.split(''),
  //     text: event.target.value
  //   })
  // }

  // const deleteCharHandler = (index) => {
  //   const chars = [...taskState.charArray];
  //   chars.splice(index,1);
  //   setTaskState({
  //     length: chars.join('').length,
  //     charArray: chars,
  //     text: chars.join('')
  //   })
  // }
  // return (
  //   <div className="App">
  //     <input type="text" onChange={changeInputHandler} value={taskState.text}/>
  //     <p>Length is {taskState.length}</p>
  //     <Validation lenght={taskState.length}  />
  //     <div>
  //       {
  //         taskState.charArray.map((char, index) => {
  //           console.log(index)
  //           return <Char click={deleteCharHandler.bind(undefined,index)} char={char} key={index} />
  //         })
  //       }
  //     </div>
      
  //   </div>
  // );
}

export default App;

import './App.css';
import React, { useState} from 'react';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Miguel", age: 20},
      { name: "Angel", age: 30},
      { name: "Vargas", age: 50},
    ],
    otherProperty: 'This is a test'
  });

  const [userNames, setUserNamesState] = useState({
    userNames: [
      { userName: 'Dora'},
      { userName: 'Ismael'},
      { userName: 'Margoth'},
      { userName: 'Julio'},
    ]
  })

  const changePersonStateHandler = (nameChange) => {
    //En esta parte estoy editando el estado pero no le mando 'otherProperty'
    // lo que hace que este atributo se pierda, si lo quiero mantener debo asignarlo de nuevo
    setPersonsState({persons: [
        { name: "Miguel - Tapion", age: 20},
        { name: nameChange, age: 30},
        { name: "Cabezas", age: 63},
      ],
      otherProperty: personsState.otherProperty
    });
  }

  const onChangeInputHandler = event => {
    setPersonsState({persons: [
      { name: "Miguel - Tapion", age: 20},
      { name: event.target.value, age: 30},
      { name: "Cabezas", age: 63},
    ],
    otherProperty: personsState.otherProperty
    });
  }

  const onChangeInputUserHandler = event => {
    setUserNamesState({
      userNames: [
        { userName: 'Diana'},
        { userName: 'Ismael'},
        { userName: 'Margoth'},
        { userName: event.target.value},
      ]
    })
  }

  const style = {
    backgroudColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hola esto es React!, Soy Miguel</h1>
      <button 
        style={style}
        onClick={changePersonStateHandler.bind(this,'Marcos')} 
        >Click me</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        click={changePersonStateHandler.bind(this,'Juan Perez')} 
        change={onChangeInputHandler}
        >I like the dogs</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}  />
      <UserInput change={onChangeInputUserHandler} 
        userName={userNames.userNames[3].userName} />
      <UserOutput userName={userNames.userNames[0].userName} />
      <UserOutput userName={userNames.userNames[1].userName} />
      <UserOutput userName={userNames.userNames[2].userName} />
      <UserOutput userName={userNames.userNames[3].userName} />
    </div>
  );
}

export default App;

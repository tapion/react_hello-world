import './App.css';
import React, { useState} from 'react';
// import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

function App() {
  // const onChangeInputHandler = event => {
  //   setPersonsState({persons: [
  //     { name: "Miguel - Tapion", age: 20},
  //     { name: event.target.value, age: 30},
  //     { name: "Cabezas", age: 63},
  //   ],
  //   otherProperty: personsState.otherProperty
  //   });
  // }

  // const [personsState, setPersonsState] = useState({
  //   persons: [
  //     { id: 'asdaq', name: "Miguel", age: 20},
  //     { id: 'sad', name: "Angel", age: 30},
  //     { id: 'ahggfhsdaq', name: "Vargas", age: 50},
  //     { id: 'fdsfs', name: "Cabezas", age: 50},
  //     { id: 'dfg', name: "Venegas", age: 50},
  //   ],
  //   otherProperty: 'This is a test',
  //   showPerson: false
  // });

  // const [userNames, setUserNamesState] = useState({
  //   userNames: [
  //     { userName: 'Dora'},
  //     { userName: 'Ismael'},
  //     { userName: 'Margoth'},
  //     { userName: 'Julio'},
  //   ]
  // })

  // const changePersonStateHandler = (personId, event) => {
  //   const persons = [...personsState.persons];
  //   const personIndex = persons.findIndex(per => per.id === personId);
  //   persons[personIndex].name = event.target.value;
  //   setPersonsState({
  //     persons,
  //     otherProperty: personsState.otherProperty,
  //     showPerson: personsState.showPerson
  //   });
  // }


  // const deletePersonHandler = indexPerson => {
  //   const persons = personsState.persons.slice();
  //   persons.splice(indexPerson,1);
  //    setPersonsState({
  //     persons: persons,
  //     otherProperty: personsState.otherProperty,
  //     showPerson: personsState.showPerson
  //   });
  // }

  // const togglePersonHandler = () => {
  //   setPersonsState({
  //     persons: personsState.persons,
  //     showPerson: !personsState.showPerson,
  //   });
  // }

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

  // const style = {
  //   backgroudColor: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer'
  // }

  // let person = null;

  // if(personsState.showPerson){
  //   person = (
  //   <div>
  //     { 
  //       personsState.persons.map((person, index) => {
  //         return (
  //           <Person 
  //             click={deletePersonHandler.bind(undefined,index)}
  //             name={person.name} 
  //             age={person.age}
  //             change={changePersonStateHandler.bind(undefined,person.id)}
  //             key={person.id} />
  //         )
  //       })
  //     }
  //     {/* <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
  //     <Person 
  //       name={personsState.persons[1].name} 
  //       age={personsState.persons[1].age} 
  //       click={changePersonStateHandler.bind(this,'Juan Perez')} 
  //       change={onChangeInputHandler}
  //       >I like the dogs</Person>
  //     <Person name={personsState.persons[2].name} age={personsState.persons[2].age}  /> */}
  //   </div>
  //   );
  // }

  const [taskState, setTaskState] = useState(
    {
      length: 0,
      charArray: [],
      text: ''
    }
  );

  const changeInputHandler = (event) =>{
    setTaskState({
      length: event.target.value.length,
      charArray: event.target.value.split(''),
      text: event.target.value
    })
  }

  const deleteCharHandler = (index) => {
    const chars = [...taskState.charArray];
    chars.splice(index,1);
    setTaskState({
      length: chars.join('').length,
      charArray: chars,
      text: chars.join('')
    })
  }

  return (
    <div className="App">
      <input type="text" onChange={changeInputHandler} value={taskState.text}/>
      <p>Length is {taskState.length}</p>
      <Validation lenght={taskState.length}  />
      <div>
        {
          taskState.charArray.map((char, index) => {
            console.log(index)
            return <Char click={deleteCharHandler.bind(undefined,index)} char={char} key={index} />
          })
        }
      </div>
      
    </div>
  );
  // return (
  //   <div className="App">
  //     <h1>Hola esto es React!, Soy Miguel</h1>
  //     <button 
  //       style={style}
  //       onClick={togglePersonHandler} 
  //       >Click me</button>
  //     { person }
  //     <UserInput change={onChangeInputUserHandler} 
  //       userName={userNames.userNames[3].userName} />
  //     <UserOutput userName={userNames.userNames[0].userName} />
  //     <UserOutput userName={userNames.userNames[1].userName} />
  //     <UserOutput userName={userNames.userNames[2].userName} />
  //     <UserOutput userName={userNames.userNames[3].userName} />
  //   </div>
  // );
}

export default App;

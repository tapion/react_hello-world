import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hello from Person's commponent, I'm {props.name}, and I'm {props.age} years old</p>
            <p><input type="text" onChange={props.change} value={props.name} /> </p>
            <p>{props.children}</p>            
        </div>
        )
}

export default person;
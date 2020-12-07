import './Char.css';

const char = (props) =>{
    return (
        <p onClick={props.click} className="Char">{props.char}</p>
    )
}

export default char;
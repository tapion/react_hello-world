import './Person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width: 450px;
    }
`

const person = (props) => {
    // const style = {
    //     '@media (ming-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        <StyleDiv>
            <p onClick={props.click}>Hello from Person's commponent, I'm {props.name}, and I'm {props.age} years old</p>
            <p><input type="text" onChange={props.change} value={props.name} /> </p>
            <p>{props.children}</p>            
        </StyleDiv>
        )
}

export default person;
import React, { useEffect } from 'react';
import styleClass from './Cockpit.module.css'


const Cockpit = (props) => {
    useEffect(() => {
        const timer = setTimeout(()=>{
            alert('hola');
        },1000);
        return () => {
            clearTimeout(timer);
            console.log('Cockpit - clean up');
        }
    },[])

    useEffect(() => {
        console.log('Cockpit - Effect 2');
        return () => console.log('Cockpit - Clean up 2')
    })
    let buttonStyle = '';
    const styleName = []

    if(props.showPerson){
        buttonStyle = styleClass.Red;
    }

    if(props.personLenght < 3){
    styleName.push(styleClass.red)
    }

    if(props.personLenght < 2){
    styleName.push(styleClass.bold)
    }
    return (        
        <div className={styleClass.Cockpit}>
            <h1>Hola esto es React!, Soy Miguel</h1>
            {/* <ButtonStyled alt={personsState.showPerson} onClick={togglePersonHandler} >Click Me</ButtonStyled> */}
            <button className={buttonStyle} onClick={props.togglePersonHandler} >Click Me</button>
            <p className={styleName.join(' ')}>It's working</p>
        </div>
    );
}

export default React.memo(Cockpit);
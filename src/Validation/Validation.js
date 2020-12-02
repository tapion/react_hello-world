
const validation = (props) => {
    return (
        <div>
            {
                props.lenght <= 5 ? <p>Text too short</p> : <p>Text long enough</p>
            }
        </div>
    );
}

export default validation;
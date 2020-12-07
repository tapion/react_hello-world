
const UserInput = (props)=> {
    return (
        <div>
            <input type="text" onChange={props.change} value={props.userName} />
        </div>
    )
}

export default UserInput;
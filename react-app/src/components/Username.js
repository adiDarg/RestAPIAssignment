
function Username(props) {
    return (
        <div>
            {props.name.title} {props.name.first} {props.name.last}
        </div>
    )
}

export default Username;
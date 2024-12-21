import Username from "./Username";
import BirthDate from "./BirthDate";

function UserItem(props) {
    return (
        <div style={{ border: "5px solid black", padding: '10px' }}>
            <Username name={props.name} />
            <BirthDate birthDate={props.birthDate} />
            <img src={props.picture} aria-placeholder="Oops no Picture"></img>
        </div>
    )
}
export default UserItem;
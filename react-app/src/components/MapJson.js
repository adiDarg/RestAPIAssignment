import UserItem from "./UserItem";

function MapJson(props) {
    return (
        <div style={{ display: "grid", flexWrap: 'warp', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {
                props.list.map((item, index) => {
                    return (
                        <UserItem
                            key={index}
                            name={item.name}
                            birthDate={item.dob}
                            picture={item.picture.medium}
                        />
                    )
                })
            }
        </div>
    )
}
export default MapJson;
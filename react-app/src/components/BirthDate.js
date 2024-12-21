
function BirthDate(props) {
    const dateObject = new Date(props.birthDate.date);
    return (
        <div>
            {dateObject.getDate()}/{dateObject.getMonth() + 1}/{dateObject.getFullYear()}
        </div>
    )
}
export default BirthDate;
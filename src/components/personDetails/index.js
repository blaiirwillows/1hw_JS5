import { OneData } from "../../hoc-helpers"

const PersonDetails = ({itemlist: {id, title, body}}) => {

    return (<ul><li key={`item=${id}`} >
        <b> {id} </b>
        <u> {title} </u>
        <i> {body} </i>
    </li></ul>)
};

export default OneData(PersonDetails);
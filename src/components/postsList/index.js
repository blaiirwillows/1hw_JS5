import {WithData} from "../../hoc-helpers"


const PostsList = ({itemlist}) => {

    const posts = itemlist.map(({id, title})=>{
        return(
            <li key = {`item=${id}`} >
                <b> {id} </b>
                {title}
            </li>
            
        );
    });

    return <ul>{posts}</ul>
};

export default WithData(PostsList);

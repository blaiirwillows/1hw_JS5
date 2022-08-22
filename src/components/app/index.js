import { Component } from "react";
import PersonDetails from "../personDetails";
import PostsList from "../postsList";


export default class App extends Component {
    render () {
        return(
            <div>
            
                <PostsList/>
                <PersonDetails/>
            </div>
        )
    }
}
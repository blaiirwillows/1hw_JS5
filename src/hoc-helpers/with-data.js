import StoreService from "../services";
import { Component } from "react";


const WithData = (Wrapp) => {
    return class extends Component {
        storeService = new StoreService();

        state = {
            itemlist: null, 
            loading: true,
            error: false,
        };

        componentDidMount(){
            this.storeService
            .getResource()
            .then((posts) => {
                this.setState({itemlist: posts, error:false});
            })
            .catch(()=>{
                this.setState({error: true});
            })
            .finally(() => {
                this.setState({loading:false}); 
            })
        }

        render(){
            const {loading, itemlist, error} = this.state;

            if (loading) {
                return <h1>loading ....</h1>
            }
            if (error) {
                return <h1>Error</h1>
            }

            return <Wrapp itemlist={itemlist}/>
        }
    }
}

export default WithData;
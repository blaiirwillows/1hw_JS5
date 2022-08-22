import StoreService from "../services";
import { Component } from "react";


const OneData = (Wrapp) => {
    return class extends Component {
        storeService = new StoreService();

        state = {
            itemlist: null, 
            loading: true,
            error: false,
        };

        componentDidMount(){
            this.storeService
            .getPost(5)
            .then((post) => {
                this.setState({itemlist: post, error:false});
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

export default OneData;
export default class StoreService {
    #api = "https://jsonplaceholder.typicode.com/posts";

    getResource = async () => {
        const responce = await fetch(this.#api);
        if (!responce.ok){
            throw new Error("Something wrong")
        }

        return await responce.json();
    };

    getPost = async (id) => {
        const data = await this.getResource();

        return data.find((el) => el.id === id);
    };
}




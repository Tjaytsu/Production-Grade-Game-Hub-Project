import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '653dffe164aa4a0eb285a521433743cb'
    }
})
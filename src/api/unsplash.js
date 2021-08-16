import axios from "axios";

{/*create an instance of axios client*/}
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID hrTzuoa-OTKnfvxFmxRv1bQAgIbHtcuZEC-CSfbra0o'
    }
});
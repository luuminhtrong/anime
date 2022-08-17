import axios from 'axios';

const TestAxios = () => {
    axios.get('https://api.jikan.moe/v4/seasons/now').then(response => {
        console.log(response.data);
    });
    return ( 
        <div>
            Axios
        </div>
     );
}
 
export default TestAxios;
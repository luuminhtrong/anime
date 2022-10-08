import Movie from "../Movie";
import { useSelector } from "react-redux";

const Oped = (props) => {
    return ( 
        <div>
            <Movie title={props.data.data.title}></Movie>
        </div>
    );
}
 
export default Oped;
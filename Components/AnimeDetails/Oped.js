import Movie from "../Movie";
import { useSelector } from "react-redux";

const Oped = () => {
    const allData = useSelector((state) => state.anime.allData);
    return ( 
        <div>
            <Movie title={allData.data.title}></Movie>
        </div>
    );
}
 
export default Oped;
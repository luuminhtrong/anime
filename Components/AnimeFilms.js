import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import AnimeFilmsItem from "./AnimeFilmsItem";
import { getData } from "../redux/seasonSlice";



const AnimeFilms = () => {
    const allData = useSelector((state) => state.season.allData);
    return (
        <div className="grid">
            {allData.map(data => (
                <div key={data.mal_id} className="col-4">
                    <AnimeFilmsItem data={data}/>
                </div>
            ))}
        </div>
     );
}
 
export default AnimeFilms;
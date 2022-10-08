import { useSelector } from "react-redux";
import AnimeFilmsItem from "./AnimeFilmsItem";

const AnimeFilms = () => {
  const allData = useSelector((state) => state.season.allData);
  return (
    <div className="grid">
      {allData.map((data) => (
        <div key={data.mal_id} className="xl:col-4 md:col-6 sm:col-12">
          <AnimeFilmsItem data={data} />
        </div>
      ))}
    </div>
  );
};

export default AnimeFilms;

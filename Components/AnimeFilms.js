import AnimeFilmsItem from "./AnimeFilmsItem";

const AnimeFilms = () => {
    return ( 
        <div class="grid align-items-center">
            <div class="col-4">
                <AnimeFilmsItem />
            </div>
            <div class="col-4">
                <AnimeFilmsItem />
            </div>
            <div class="col-4">
                <AnimeFilmsItem />
            </div>
            <div class="col-4">
                <AnimeFilmsItem />
            </div>
            <div class="col-4">
                <AnimeFilmsItem />
            </div>
            <div class="col-4">
                <AnimeFilmsItem />
            </div>
        </div>
     );
}
 
export default AnimeFilms;
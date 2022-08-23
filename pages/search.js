import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
// import AnimeFilms from '../Components/AnimeFilms';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/searchSlice';

import AnimeFilmsItem from '../Components/AnimeFilmsItem';


const search = () => {
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.search.allData.data);

    // const [dataShow, setDataShow] = useState(allData)

    const [value, setValue] = useState('')

    const handleSubmit = () => {
        dispatch(getData(value))
    }

    return ( 
        <div className='search-wrapper'> 
            <div className="search">
                <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText 
                        onChange={(e) => setValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                handleSubmit();
                            }
                        }} 
                        className="p-inputtext-lg block input-size" 
                        placeholder="Search"
                    />
                </span>
            </div>
            <div className="grid">
                {allData.map(data => (
                    <div key={data.mal_id} className="xl:col-4 md:col-6 sm:col-12">
                        <AnimeFilmsItem data={data}/>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default search;
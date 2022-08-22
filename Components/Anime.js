import { useEffect, useState } from "react";
import { TabMenu } from 'primereact/tabmenu';
import { Dropdown } from 'primereact/dropdown';

import { useDispatch } from "react-redux";
import { getData } from "../redux/seasonSlice";

const items = [
    {label: 'TV', icon: ''},
    {label: 'Movie', icon: ''},
    {label: 'OVas & Others', icon: ''},
    {label: 'All', icon: ''},
];

const Anime = () => {
    const [animeYear, setAnimeYear] = useState(2022)
    const [animeSeason, setAnimeSeason] = useState('Summer')

    const seasons = ['Winter', 'Spring', 'Summer', 'Fall']

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getData({year: animeYear, seasonal: animeSeason}))
    },[animeYear, animeSeason])

    function toNextSeason() {
        const currentSeasonIndex = seasons.findIndex((season) => season === animeSeason)
        if (currentSeasonIndex === seasons.length - 1) {
            setAnimeSeason(seasons[0])
            setAnimeYear(animeYear + 1)
        } else {
            setAnimeSeason(seasons[currentSeasonIndex+1])
        }
        // getSeasonAnimeList()
    }

    function toPreviousSeason() {
        const currentSeasonIndex = seasons.findIndex((season) => season === animeSeason)
        if (currentSeasonIndex === 0) {
            setAnimeSeason(seasons[seasons.length - 1])
            setAnimeYear(animeYear - 1)
        } else {
            setAnimeSeason(seasons[currentSeasonIndex-1])
        }
    }
    
    const [activeIndex, setActiveIndex] = useState();
    const citySelectItems = [
        {label: 'Title (ascending) ', value: 'NY'   },
        {label: 'Title (descending) ', value: 'RM'},
        {label: 'Score (ascending) ', value: 'LDN'},
        {label: 'Score (descending) ', value: 'IST'},
    ];
    return ( 
    <div className="mb-3 mt-3 grid align-items-center">
            <div className="col-3">
                <div className="anime-season flex align-items-center" >
                    <i className="pi pi-chevron-left text-3xl cursor-pointer" onClick={toPreviousSeason}></i>
                    <div className="anime-season-name text-4xl">
                        { animeSeason } { animeYear }
                    </div>
                    <i className="pi pi-chevron-right text-3xl cursor-pointer" onClick={toNextSeason}></i>
                </div>
            </div>
            <div className="col-7">
                <div className="anime-season-menu">
                    <TabMenu className="border-none" model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}/>
                </div>
            </div>
            <div className="col-2 sizes">
                <Dropdown  className="p-inputtext-sm border-noround w-16rem"  options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Sort by"/>
            </div>
    </div>
    );
}
 
export default Anime;
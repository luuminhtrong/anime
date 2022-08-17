import { useState } from "react";
import { TabMenu } from 'primereact/tabmenu';

import { Dropdown } from 'primereact/dropdown';

const items = [
    {label: 'TV', icon: ''},
    {label: 'Movie', icon: ''},
    {label: 'OVas & Others', icon: ''},
    {label: 'All', icon: ''},
];


const Anime = () => {
    useState
    const [activeIndex, setActiveIndex] = useState(0);
    const citySelectItems = [
        {label: 'Title (ascending) ', value: 'NY'},
        {label: 'Title (descending) ', value: 'RM'},
        {label: 'Score (ascending) ', value: 'LDN'},
        {label: 'Score (descending) ', value: 'IST'},
    ];
    return ( 
    <div class="mb-3 mt-3 grid align-items-center">
            <div class="col-2">
                <div className="anime-season flex align-items-center" >
                    <i className="pi pi-chevron-left text-3xl cursor-pointer"></i>
                    <div className="anime-season-name text-5xl">
                        Fall 2021
                    </div>
                    <i className="pi pi-chevron-right text-3xl cursor-pointer"></i>
                </div>
            </div>
            <div class="col-7">
                <div className="anime-season-menu">
                    <TabMenu className="border-none" model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}/>
                </div>
            </div>
            <div class="col-3 sizes">
                <Dropdown  className="p-inputtext-sm border-noround w-16rem"  options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Sort by"/>
            </div>
    </div>
    );
}
 
export default Anime;
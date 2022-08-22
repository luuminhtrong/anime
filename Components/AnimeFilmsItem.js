import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import { ScrollPanel } from 'primereact/scrollpanel';

const AnimeFilmsItem = (data) => {
    // console.log(data);
    return (
        <div className="grid anime-item w-12 ">
            <div className="col-5 img">
                <Link href='/details'>
                    <img className="img" src={data.data.images.jpg.image_url} width={220} height={320} />
                </Link>
            </div>
            <div className="col-7">
                <ScrollPanel style={{ width: '100%', height: '315px' }} className="custombar1">
                    <div style={{ lineHeight: '1.5' }}>
                        <div className="anime-title-name mt-3 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                            {data.data.title}
                        </div>  
                        <p className="anime-studio-name">{data.data.episodes ?  data.data.episodes : "??"} episodes</p>
                        <p className="anime-episodes mb-2 mt-2">{data.data.source}</p>
                            {data.data.synopsis}
                    </div>
                </ScrollPanel>
            </div>
        </div>
);
}
export default AnimeFilmsItem;
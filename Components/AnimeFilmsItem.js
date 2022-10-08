import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import { ScrollPanel } from "primereact/scrollpanel";

const AnimeFilmsItem = (data) => {
  return (
    <div className="grid anime-item w-12">
      <div className="col-5">
        <Link href={`/${data.data.mal_id}`}>
          <img className="img" src={data.data.images.jpg.image_url} />
        </Link>
      </div>
      <div className="col-7">
        <ScrollPanel
          style={{ width: "100%", height: "240px" }}
          className="custombar1">
          <div style={{ lineHeight: "1.5" }}>
            <div className="anime-title-name white-space-nowrap overflow-hidden text-overflow-ellipsis">
              {data.data.title}
            </div>
            <p className="anime-studio-name">
              {data.data.episodes ? data.data.episodes : "??"} episodes
            </p>
            <p className="anime-episodes mb-2 mt-2">{data.data.source}</p>
            {data.data.synopsis}
          </div>
        </ScrollPanel>
      </div>
    </div>
  );
};
export default AnimeFilmsItem;

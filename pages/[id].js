import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TabView, TabPanel } from "primereact/tabview";
import Info from "../Components/AnimeDetails/Info";
import Episode from "../Components/AnimeDetails/Episode";
import Oped from "../Components/AnimeDetails/Oped";

import { getData } from "../redux/animeApi";
import { getDataEpisodes } from "../redux/animeEpisodesSlice";
import { getDataThemes } from "../redux/themesSlice";
import Movie from "../Components/Movie";

const DetailAnime = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getData(id));
    };
    if (id !== undefined) fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDataEpisodes(id));
    };
    if (id !== undefined) fetchData();
  }, [id]);

  const allData = useSelector((state) => state.anime.allData);
  const dataEpisodes = useSelector((state) => state.episodes.allData);
  return (
    <div className="anime-detail">
      <div className="grid">
        <div className="xl:col-4 md:col-6  text-center">
          <img
            className="img-detail"
            src={allData.data.images.jpg.image_url}
            alt="Image Text"
          />
          <div className="rating">
            <p>Rating</p>
            <span className="rating-point">
              {allData.data.score ? `${allData.data.score}/10` : "--/10"}
            </span>
            <p>{allData.data.scored_by} ratings</p>
          </div>
          <div className="anime-link white-space-nowrap overflow-hidden text-overflow-ellipsis">
            <p>Official Website</p>
            <Link href={`${allData.data.url}`}>
              <a>{allData.data.url}</a>
            </Link>
          </div>
        </div>
        <div className="xl:col-8 md:col-6">
          <p className="anime-detail-name">{allData.data.title}</p>
          <p className="anime-detail-english-name">
            {allData.data.title_english} (English name)
          </p>
          <TabView>
            <TabPanel header="Info">
              <Info data={allData} />
            </TabPanel>
            <TabPanel header="Episode list">
              <Episode data={dataEpisodes} />
            </TabPanel>
            <TabPanel header="OP & ED">
              <Oped data={allData} />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default DetailAnime;

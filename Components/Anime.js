import { useEffect, useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Dropdown } from "primereact/dropdown";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/seasonSlice";

import * as season from "../redux/seasonSlice";

const items = [
  { label: "TV", icon: "" },
  { label: "Movie", icon: "" },
  { label: "OVas & Others", icon: "" },
  { label: "All", icon: "" },
];

const Anime = () => {
  const [animeYear, setAnimeYear] = useState(2022);
  const [animeSeason, setAnimeSeason] = useState("Summer");

  const seasons = ["Winter", "Spring", "Summer", "Fall"];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData({ year: animeYear, seasonal: animeSeason }));
  }, [animeYear, animeSeason]);

  function toNextSeason() {
    const currentSeasonIndex = seasons.findIndex(
      (season) => season === animeSeason
    );
    if (currentSeasonIndex === seasons.length - 1) {
      setAnimeSeason(seasons[0]);
      setAnimeYear(animeYear + 1);
    } else {
      setAnimeSeason(seasons[currentSeasonIndex + 1]);
    }
  }

  function toPreviousSeason() {
    const currentSeasonIndex = seasons.findIndex(
      (season) => season === animeSeason
    );
    if (currentSeasonIndex === 0) {
      setAnimeSeason(seasons[seasons.length - 1]);
      setAnimeYear(animeYear - 1);
    } else {
      setAnimeSeason(seasons[currentSeasonIndex - 1]);
    }
  }

  const [activeIndex, setActiveIndex] = useState();
  const [sort, setSort] = useState("");
  const citySelectItems = [
    { label: "Title (ascending) ", value: "ASC-TITLE" },
    { label: "Title (descending) ", value: "DESC-TITLE" },
    { label: "Score (ascending) ", value: "ASC-SCORE" },
    { label: "Score (descending) ", value: "DESC-SCORE" },
  ];

  const handleChangeSort = (event) => {
    setSort(event);

    switch (event) {
      case "ASC-TITLE":
        dispatch(season.ASC("title"));
        break;
      case "DESC-TITLE":
        dispatch(season.DESC("title"));
        break;
      case "ASC-SCORE":
        dispatch(season.ASC("score"));
        break;
      case "DESC-SCORE":
        dispatch(season.DESC("score"));
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-3 mt-3 grid align-items-center">
      <div className="xl:col-8 md:col-12 sm:col-12 anime-season_tablet">
        <div className="anime-season flex align-items-center">
          <i
            className="pi pi-chevron-left text-3xl cursor-pointer"
            onClick={toPreviousSeason}></i>
          <div className="anime-season-name text-4xl">
            {animeSeason} {animeYear}
          </div>
          <i
            className="pi pi-chevron-right text-3xl cursor-pointer"
            onClick={toNextSeason}></i>
        </div>
      </div>
      <div className="xl:col-4 md:col-12 sm:col-12 input-mobile">
        <Dropdown
          className="p-inputtext-sm border-noround w-full"
          options={citySelectItems}
          onChange={(e) => handleChangeSort(e.target.value)}
          placeholder={sort ? sort : "Sort by"}
        />
      </div>
      {/* <div className="col-7">
        <div className="anime-season-menu">
          <TabMenu
            className="border-none"
            model={items}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Anime;

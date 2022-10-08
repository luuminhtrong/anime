import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getDataSynopsis } from "../../redux/animeEpisodesSlice";

import { Accordion, AccordionTab } from "primereact/accordion";

const Episode = (data) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  // const handleClick = (e) => {
  //     const index = activeIndex
  //     dispatch(getDataSynopsis({id: id, episodes: 2 }))
  // }

  // const synopsis = useSelector((state) => state.synopsis.allData);

  // const dataSynopsis = synopsis.data
  const dataEpisodes = data.data.data;

  function openEpSynopsis(index) {
    const correspondingEp = dataEpisodes[index];
    if (!correspondingEp.synopsis) {
      dispatch(getDataSynopsis({ id: id, episodes: correspondingEp.mal_id }));
    }
  }

  return (
    <div>
      <Accordion
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        onTabOpen={(e) => openEpSynopsis(e.index)}>
        {dataEpisodes.map((item) => (
          <AccordionTab
            key={item.mal_id}
            header={`Episode ${item.mal_id}: ${item.title}`}>
            {item.synopsis}
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default Episode;

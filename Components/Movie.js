import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/themesSlice";

import { Accordion, AccordionTab } from "primereact/accordion";
import ReactPlayer from "react-player";

function Movie(props) {
  const dispatch = useDispatch();
  const fetchData = async (title) => {
    await dispatch(getData(title));
  };
  const [activeIndex, setActiveIndex] = React.useState(null);

  const data = useSelector((state) => state.theme.data);

  React.useEffect(() => {
    const convertTitleToSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/([^0-9a-z-\s])/g, "")
        .replace(/(\s+)/g, "_")
        .replace(/\_\_\_\_\_/gi, "_")
        .replace(/\_\_\_\_/gi, "_")
        .replace(/\_\_\_/gi, "_")
        .replace(/\_\_/gi, "_")
        .replace("-", "_");
    };

    if (props.title && props.title !== "") {
      const title = convertTitleToSlug(props.title);
      fetchData(title);
    }
  }, [props.title]);

  // const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <>
      {/* {data.map((item) =>
        item.animethemeentries.map((itemM) => {
          const item = itemM.videos.reduce((prev, cur) =>
            prev.resolution >= cur.resolution ? prev : cur
          );
          return (
            <ReactPlayer
              key={itemM.id}
              url={`https://animethemes.moe/video/${item.basename[0]}`}
              controls
              width="100%"
              height="100%"
            />
          );
        })
      )} */}

      <Accordion
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        // onTabOpen={(e) => openEpSynopsis(e.index)}
      >
        {data.map((item) => {
          return item.animethemeentries.map((itemM) => {
            const item = itemM.videos.reduce((prev, cur) =>
              prev.resolution >= cur.resolution ? prev : cur
            );
            console.log(item.link);
            return (
              <AccordionTab header={item.filename} key={item.id}>
                <ReactPlayer
                  key={item.id}
                  url={`https://beta.animethemes.moe/video/HatarakuMaouSama-OP1v2.webm`}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </AccordionTab>
            );
          });
        })}
      </Accordion>
    </>
  );
}

export default Movie;

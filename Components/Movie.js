import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/themeSlice";

function Movie(props) {
    const dispatch = useDispatch()
    const fetchData = async (title) => {
    await dispatch(getData(title));
  };

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

    return ( 
      <>
      allData</>
     );
}

export default Movie;